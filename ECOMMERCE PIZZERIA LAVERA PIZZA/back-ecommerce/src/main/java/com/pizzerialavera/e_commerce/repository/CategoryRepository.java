package com.pizzerialavera.e_commerce.repository;

import com.pizzerialavera.e_commerce.entity.Category;
import com.pizzerialavera.e_commerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Optional<Category> findByName(String name);
    long count();
}