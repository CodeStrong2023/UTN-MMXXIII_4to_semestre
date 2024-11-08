package com.pizzerialavera.e_commerce.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank; // Importar para la validación
import jakarta.validation.constraints.NotNull; // Importar para la validación
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "additives")
public class Additive {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre del aditivo no puede estar vacío") // Validación para nombre no vacío
    @Column(nullable = false, unique = true) // Asegurando que el nombre sea único
    private String name;

    @NotNull(message = "El precio del aditivo no puede ser nulo") // Validación para precio no nulo
    @Column(nullable = false)
    private Double price;

    public Additive() {}

    public Additive(String name, Double price) {
        this.name = name;
        this.price = price;
    }

    @Override
    public String toString() {
        return "Adicional{" +
                "id=" + id +
                ", nombre='" + name + '\'' +
                ", precio=" + price +
                '}';
    }
}

