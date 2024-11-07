package com.pizzerialavera.e_commerce.service;

import com.pizzerialavera.e_commerce.entity.Additive;
import com.pizzerialavera.e_commerce.entity.Category;
import com.pizzerialavera.e_commerce.entity.Ingredient;
import com.pizzerialavera.e_commerce.entity.Product;
import com.pizzerialavera.e_commerce.exception.BadRequestException;
import com.pizzerialavera.e_commerce.repository.ProductRepository;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager; // Importa LogManager
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private IngredientService ingredientService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private AdditiveService additiveService;


    public long count() {
        return productRepository.count();
    }

    // Usa LogManager para obtener el logger
    private static final Logger logger = LogManager.getLogger(ProductService.class);

    // Método para guardar un producto
    public Product saveProduct(Product product) throws BadRequestException {
        // Primero verifica si la categoría existe a través del nombre
        Optional<Category> existingCategory = categoryService.findByName(product.getCategory().getName());
        Category category;

        if (existingCategory.isPresent()) {
            category = existingCategory.get(); // Si ya existe, usa la existente
        } else {
            category = categoryService.save(product.getCategory()); // Crea la nueva categoría si no existe
        }

        product.setCategory(category);

        // Procesa los ingredientes
        Set<Ingredient> ingredients = new HashSet<>();
        for (Ingredient ingredient : product.getIngredient()) {
            Optional<Ingredient> existingIngredient = ingredientService.findByString(ingredient.getName());
            if (existingIngredient.isPresent()) {
                ingredients.add(existingIngredient.get());
            } else {
                Ingredient newIngredient = ingredientService.createIngredient(ingredient);
                ingredients.add(newIngredient);
            }
        }
        product.setIngredients(ingredients);

        // Procesa los aditivos de manera similar
        Set<Additive> additives = new HashSet<>();
        for (Additive additive : product.getAdditive()) {
            Optional<Additive> existingAdditive = additiveService.findByString(additive.getName());
            if (existingAdditive.isPresent()) {
                additives.add(existingAdditive.get());
            } else {
                Additive newAdditive = additiveService.createAdditive(additive);
                additives.add(newAdditive);
            }
        }
        product.setAdditives(additives);

        return productRepository.save(product);
    }





    // Método para obtener todos los productos
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    // Método para encontrar un producto por su ID
    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }

    // Método para eliminar un producto por su ID
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    // Método para actualizar un producto
    public void updateProduct(Product product) {
        productRepository.save(product);
    }

    // Método para buscar un producto por un string
    public Optional<Product> findByString(String stringy) {
        return productRepository.findByName(stringy);
    }
}
