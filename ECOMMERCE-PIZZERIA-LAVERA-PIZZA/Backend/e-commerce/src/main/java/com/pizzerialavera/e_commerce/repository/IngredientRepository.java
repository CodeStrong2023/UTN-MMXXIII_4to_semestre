package com.pizzerialavera.e_commerce.repository;

import com.pizzerialavera.e_commerce.entity.Ingredient;
import com.pizzerialavera.e_commerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
    Optional<Ingredient> findByName(String name);
}