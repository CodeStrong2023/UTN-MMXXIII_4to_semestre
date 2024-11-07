package com.pizzerialavera.e_commerce.service;

import com.pizzerialavera.e_commerce.entity.Ingredient;
import com.pizzerialavera.e_commerce.repository.IngredientRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class IngredientService {

    @Autowired
    private IngredientRepository ingredientRepository;

    @Autowired
    private Validator validator; // Inyectar el validador

    private static final Logger logger = LogManager.getLogger(IngredientService.class); // Inicializa el logger


    public List<Ingredient> getAllIngredients() {
        return ingredientRepository.findAll();
    }

    public Ingredient getIngredientById(Long id) {
        return ingredientRepository.findById(id).orElse(null);
    }

    public Ingredient createIngredient(@Valid Ingredient ingredient) {
        // Validar el ingrediente antes de guardarlo
        Set<ConstraintViolation<Ingredient>> violations = validator.validate(ingredient);
        if (!violations.isEmpty()) {
            // Manejo de errores: puedes lanzar una excepción personalizada o registrar un error
            for (ConstraintViolation<Ingredient> violation : violations) {
                logger.error("Error de validación: {}", violation.getMessage());
            }
            return null; // O lanzar una excepción
        }

        // Verificar si ya existe un ingrediente con el mismo nombre
        Optional<Ingredient> existingIngredient = ingredientRepository.findByName(ingredient.getName());
        if (existingIngredient.isPresent()) {
            logger.warn("El ingrediente con el nombre '{}' ya existe. No se guardará nuevamente.", ingredient.getName()); // Registrar la advertencia
            return existingIngredient.get(); // Retornar el ingrediente existente
        }

        logger.info("Guardando el nuevo ingrediente: {}", ingredient.getName()); // Registro informativo al guardar
        return ingredientRepository.save(ingredient); // Guardar el nuevo ingrediente
    }

    public Ingredient updateIngredient(Long id, Ingredient ingredientDetails) {
        Ingredient ingredient = getIngredientById(id);
        if (ingredient != null) {
            ingredient.setName(ingredientDetails.getName());
            return ingredientRepository.save(ingredient);
        }
        return null;
    }

    public void deleteIngredient(Long id) {
        ingredientRepository.deleteById(id);
    }

    public Optional<Ingredient> findByString(String name) {
        return ingredientRepository.findByName(name); // Asegúrate de que esto esté correcto
    }


}