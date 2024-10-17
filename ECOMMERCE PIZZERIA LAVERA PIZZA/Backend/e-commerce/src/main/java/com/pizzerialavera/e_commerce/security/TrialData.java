package com.pizzerialavera.e_commerce.security;

import com.pizzerialavera.e_commerce.entity.*;
import com.pizzerialavera.e_commerce.repository.*;
import com.pizzerialavera.e_commerce.service.ReservationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import org.apache.poi.ss.usermodel.*;

import java.io.InputStream;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@Component
public class TrialData implements ApplicationRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ReservationService reservationService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private IngredientRepository ingredientRepository;

    @Autowired
    private AdditiveRepository additiveRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // Create Users

        createUserIfNotExists("jorgito", "jpereryradh", "user@user.com", "user", UserRole.ROLE_USER);
        createUserIfNotExists("admin", "admin", "admin@admin.com", "admin", UserRole.ROLE_ADMIN);
        createUserIfNotExists("manager", "manager", "manager@manager.com", "manager", UserRole.ROLE_MANAGER);


        // Ruta al archivo de Excel
        InputStream file = getClass().getResourceAsStream("/menu.xlsx");
        Workbook workbook = WorkbookFactory.create(file);
        Sheet sheet = workbook.getSheetAt(0);

        // Itera sobre las filas del archivo de Excel
        for (Row row : sheet) {
            if (row.getRowNum() == 0) {
                // Saltar la fila de encabezado
                continue;
            }

            Cell categoryCell = row.getCell(0);
            Cell productNameCell = row.getCell(1);
            Cell productPriceCell = row.getCell(2);
            Cell ingredientsCell = row.getCell(4);
            Cell additivesCell = row.getCell(5);
            Cell additivesPriceCell = row.getCell(6);

            // Verifica que las celdas necesarias no sean nulas
            if (categoryCell == null || productNameCell == null || productPriceCell == null) {
                continue; // O manejar el error según sea necesario
            }

            String categoryName = categoryCell.getStringCellValue();
            String productName = productNameCell.getStringCellValue();
            double productPrice = productPriceCell.getNumericCellValue();
            String ingredientsList = ingredientsCell != null ? ingredientsCell.getStringCellValue() : "";
            String additivesList = additivesCell != null ? additivesCell.getStringCellValue() : "";
            double additivesPrice = additivesPriceCell != null ? additivesPriceCell.getNumericCellValue() : 0.0;

            // Verifica si la categoría ya existe
            Category category = categoryRepository.findByName(categoryName).orElse(new Category(categoryName));
            if (category.getId() == null) {
                categoryRepository.save(category);
            }

            // Crear el producto
            Product product = new Product(productName, productPrice, category);

            // Agregar ingredientes
            Set<Ingredient> ingredients = parseIngredients(ingredientsList);
            product.setIngredients(ingredients);

            // Agregar aditivos (si existen)
            if (!additivesList.isEmpty()) {
                Set<Additive> additives = parseAdditives(additivesList, additivesPrice);
                product.setAdditives(additives);
            }

            // Guardar el producto
            productRepository.save(product);
        }

        // Cerrar el archivo
        workbook.close();
        file.close();
    }

    private void createUserIfNotExists(String nombre, String userName, String email, String rawPassword, UserRole role) {
        if (!userRepository.existsByEmail(email)) {
            String encodedPassword = passwordEncoder.encode(rawPassword);
            User user = new User(nombre, userName, email, encodedPassword, role);
            userRepository.save(user);
        }
    }

    // Método para parsear los ingredientes desde una cadena
    private Set<Ingredient> parseIngredients(String ingredientsList) {
        Set<Ingredient> ingredients = new HashSet<>();
        String[] ingredientsArray = ingredientsList.split(",");
        for (String ingredientName : ingredientsArray) {
            ingredientName = ingredientName.trim();
            Ingredient ingredient = ingredientRepository.findByName(ingredientName).orElse(new Ingredient(ingredientName));
            if (ingredient.getId() == null) {
                ingredientRepository.save(ingredient);
            }
            ingredients.add(ingredient);
        }
        return ingredients;
    }

    // Método para parsear los aditivos desde una cadena
    private Set<Additive> parseAdditives(String additivesList, double additivesPrice) {
        Set<Additive> additives = new HashSet<>();
        String[] additivesArray = additivesList.split(",");
        for (String additiveName : additivesArray) {
            additiveName = additiveName.trim();
            Additive additive = additiveRepository.findByName(additiveName).orElse(new Additive(additiveName, additivesPrice));
            if (additive.getId() == null) {
                additiveRepository.save(additive);
            }
            additives.add(additive);
        }
        return additives;
    }
}
