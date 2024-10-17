package com.pizzerialavera.e_commerce.repository;

import com.pizzerialavera.e_commerce.entity.Additive;
import com.pizzerialavera.e_commerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdditiveRepository extends JpaRepository<Additive, Long> {
    Optional<Additive> findByName(String name);
}