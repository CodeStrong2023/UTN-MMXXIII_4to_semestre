package com.pizzerialavera.e_commerce.service;

import com.pizzerialavera.e_commerce.entity.Additive;
import com.pizzerialavera.e_commerce.repository.AdditiveRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class AdditiveService {

    @Autowired
    private AdditiveRepository additiveRepository;

    private static final Logger logger = LogManager.getLogger(AdditiveService.class); // Inicializa el logger

    @Autowired
    private Validator validator; // Inyectar el validador

    public List<Additive> getAllAdditives() {
        return additiveRepository.findAll();
    }

    public Additive getAdditiveById(Long id) {
        return additiveRepository.findById(id).orElse(null);
    }

    public Additive createAdditive(Additive additive) {
        // Validar el aditivo antes de guardarlo
        Set<ConstraintViolation<Additive>> violations = validator.validate(additive);
        if (!violations.isEmpty()) {
            // Manejo de errores: puedes lanzar una excepción personalizada o registrar un error
            for (ConstraintViolation<Additive> violation : violations) {
                logger.error("Error de validación: {}", violation.getMessage());
            }
            return null; // O lanzar una excepción
        }

        // Verificar si ya existe un aditivo con el mismo nombre
        Optional<Additive> existingAdditive = additiveRepository.findByName(additive.getName());
        if (existingAdditive.isPresent()) {
            logger.warn("El aditivo con el nombre '{}' ya existe. No se guardará nuevamente.", additive.getName()); // Registrar la advertencia
            return existingAdditive.get(); // Retornar el aditivo existente
        }

        logger.info("Guardando el nuevo aditivo: {}", additive.getName()); // Registro informativo al guardar
        return additiveRepository.save(additive); // Guardar el nuevo aditivo
    }

    public Additive updateAdditive(Long id, Additive additiveDetails) {
        Additive additive = getAdditiveById(id);
        if (additive != null) {
            additive.setName(additiveDetails.getName());
            additive.setPrice(additiveDetails.getPrice());
            return additiveRepository.save(additive);
        }
        return null;
    }

    public void deleteAdditive(Long id) {
        additiveRepository.deleteById(id);
    }

    public Optional<Additive> findByString(String name) {
        return additiveRepository.findByName(name); // Return the result from the repository
    }
}