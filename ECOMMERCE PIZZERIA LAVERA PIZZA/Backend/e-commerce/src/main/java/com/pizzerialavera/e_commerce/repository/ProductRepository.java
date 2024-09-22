package com.pizzerialavera.e_commerce.repository;

import com.pizzerialavera.e_commerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findByName(String name);

}
