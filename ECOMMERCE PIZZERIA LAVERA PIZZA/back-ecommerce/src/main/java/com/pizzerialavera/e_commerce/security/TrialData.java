package com.pizzerialavera.e_commerce.security;

import com.pizzerialavera.e_commerce.entity.*;
import com.pizzerialavera.e_commerce.repository.UserRepository;
import com.pizzerialavera.e_commerce.service.*;
import org.apache.poi.ss.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.HashSet;
import java.util.Set;

@Component
public class TrialData implements ApplicationRunner {

    @Autowired
    private UserRepository userRepository; // Mantener el repositorio para usuarios

    @Autowired
    private ProductService productService;

    @Autowired
    private ReservationService reservationService; // Si se necesita en el futuro

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private IngredientService ingredientService;

    @Autowired
    private AdditiveService additiveService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        // Verificar si ya existen productos o categorías en la base de datos
        if (productService.count() > 0 || categoryService.count() > 0) {
            System.out.println("Los datos preseteados ya existen, omitiendo carga inicial.");
            return;
        }

        // Crear usuarios solo si no existen
        createUserIfNotExists("jorgito", "jpereryradh", "user@user.com", "user", UserRole.ROLE_USER);
        createUserIfNotExists("admin", "admin", "admin@admin.com", "admin", UserRole.ROLE_ADMIN);
        createUserIfNotExists("manager", "manager", "manager@manager.com", "manager", UserRole.ROLE_MANAGER);

        // Cargar productos desde el archivo Excel
        InputStream file = getClass().getResourceAsStream("/menu.xlsx");
        Workbook workbook = WorkbookFactory.create(file);
        Sheet sheet = workbook.getSheetAt(0);

        for (Row row : sheet) {
            if (row.getRowNum() == 0) continue;

            String categoryName = getStringCellValue(row.getCell(0));
            String productName = getStringCellValue(row.getCell(1));
            double productPrice = getNumericCellValue(row.getCell(2));
            String productDescription = getStringCellValue(row.getCell(3));
            String ingredientsList = getStringCellValue(row.getCell(4));
            String additivesList = getStringCellValue(row.getCell(5));
            double additivesPrice = getNumericCellValue(row.getCell(6));
            String size = getStringCellValue(row.getCell(7));
            String image = getStringCellValue(row.getCell(8));

            if (!categoryName.isEmpty() && !productName.isEmpty()) {
                Category category = categoryService.save(new Category(categoryName));
                Product product = new Product(productName, productPrice, productDescription, image, size, category);

                Set<Ingredient> ingredients = !ingredientsList.isEmpty() ? parseIngredients(ingredientsList) : new HashSet<>();
                product.setIngredients(ingredients);

                Set<Additive> additives = !additivesList.isEmpty() ? parseAdditives(additivesList, additivesPrice) : new HashSet<>();
                product.setAdditives(additives);

                productService.saveProduct(product);
            }
        }

        workbook.close();
        file.close();
    }


    // Método para obtener el valor de una celda como String
    private String getStringCellValue(Cell cell) {
        if (cell == null) {
            return "";
        }
        switch (cell.getCellType()) {
            case STRING:
                return cell.getStringCellValue();
            case NUMERIC:
                return String.valueOf(cell.getNumericCellValue());
            default:
                return "";
        }
    }

    // Método para obtener el valor de una celda como double
    private double getNumericCellValue(Cell cell) {
        if (cell == null) {
            return 0.0;
        }
        switch (cell.getCellType()) {
            case NUMERIC:
                return cell.getNumericCellValue();
            case STRING:
                try {
                    return Double.parseDouble(cell.getStringCellValue());
                } catch (NumberFormatException e) {
                    return 0.0; // o lanzar una excepción según tu necesidad
                }
            default:
                return 0.0;
        }
    }

    // Método para parsear los ingredientes desde una cadena utilizando el servicio
    private Set<Ingredient> parseIngredients(String ingredientsList) {
        Set<Ingredient> ingredients = new HashSet<>();
        String[] ingredientsArray = ingredientsList.split(",");
        for (String ingredientName : ingredientsArray) {
            ingredientName = ingredientName.trim();
            Ingredient ingredient = ingredientService.createIngredient(new Ingredient(ingredientName));
            ingredients.add(ingredient);
        }
        return ingredients;
    }

    // Método para parsear los aditivos desde una cadena utilizando el servicio
    private Set<Additive> parseAdditives(String additivesList, double additivesPrice) {
        Set<Additive> additives = new HashSet<>();

        // Verifica si la lista de aditivos no está vacía o es nula
        if (additivesList != null && !additivesList.trim().isEmpty()) {
            String[] additivesArray = additivesList.split(",");
            for (String additiveName : additivesArray) {
                additiveName = additiveName.trim();
                // Asegúrate de no agregar un aditivo si su nombre está vacío
                if (!additiveName.isEmpty()) {
                    Additive additive = additiveService.createAdditive(new Additive(additiveName, additivesPrice));
                    additives.add(additive);
                }
            }
        }

        // Solo devuelve los aditivos si no están vacíos
        return additives.isEmpty() ? null : additives; // Cambia a null si no hay aditivos
    }

    // Método para crear un usuario si no existe
    private void createUserIfNotExists(String nombre, String userName, String email, String rawPassword, UserRole role) {
        if (!userRepository.existsByEmail(email)) {
            String encodedPassword = passwordEncoder.encode(rawPassword);
            User user = new User(nombre, userName, email, encodedPassword, role);
            userRepository.save(user);
        }
    }
}
