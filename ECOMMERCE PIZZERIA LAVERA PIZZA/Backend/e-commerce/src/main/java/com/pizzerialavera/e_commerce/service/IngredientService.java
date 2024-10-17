package com.pizzerialavera.e_commerce.service;

import com.pizzerialavera.e_commerce.entity.Ingredient;
import com.pizzerialavera.e_commerce.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService {

    @Autowired
    private IngredientRepository ingredientRepository;

    public List<Ingredient> getAllIngredients() {
        return ingredientRepository.findAll();
    }

    public Ingredient getIngredientById(Long id) {
        return ingredientRepository.findById(id).orElse(null);
    }

    public Ingredient createIngredient(Ingredient ingredient) {
        return ingredientRepository.save(ingredient);
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

    public void findByString(String name) {
        ingredientRepository.findByName(name);
    }
}