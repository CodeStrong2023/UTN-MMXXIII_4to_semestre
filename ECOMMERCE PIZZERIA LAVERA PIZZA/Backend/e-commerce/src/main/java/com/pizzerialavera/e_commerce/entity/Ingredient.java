package com.pizzerialavera.e_commerce.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank; // Importar para la validación
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "ingredients")
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre del ingrediente no puede estar vacío") // Validación para nombre no vacío
    @Column(nullable = false, unique = true) // Asegurando que el nombre sea único
    private String name;

    public Ingredient() {}

    public Ingredient(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Ingrediente{" +
                "id=" + id +
                ", nombre='" + name + '\'' +
                '}';
    }
}
