package com.pizzerialavera.e_commerce.entity;

import jakarta.persistence.*;
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

    @Column(nullable = false)
    private String name;

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

