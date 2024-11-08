package com.pizzerialavera.e_commerce.service;

import com.pizzerialavera.e_commerce.entity.Category;
import com.pizzerialavera.e_commerce.repository.CategoryRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private static final Logger logger = LogManager.getLogger(CategoryService.class); // Inicializa el logger


    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    public Optional<Category> findById(Long id) {
        return categoryRepository.findById(id);
    }

    public long count() {
        return categoryRepository.count();
    }

    public Category save(Category category) {
        // Verificar si ya existe una categoría con el mismo nombre
        Optional<Category> existingCategory = categoryRepository.findByName(category.getName());
        if (existingCategory.isPresent()) {
            logger.warn("La categoría con el nombre '{}' ya existe. No se guardará nuevamente.", category.getName()); // Registrar la advertencia
            return existingCategory.get(); // Retornar la categoría existente
        }
        logger.info("Guardando la nueva categoría: {}", category.getName()); // Registro informativo al guardar
        return categoryRepository.save(category); // Guardar la nueva categoría
    }

    public void deleteById(Long id) {
        categoryRepository.deleteById(id);
    }
    public Optional<Category> findByName(String name) {
        return categoryRepository.findByName(name);
    }
}