package com.pizzerialavera.e_commerce.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String image;

    @Column(nullable = false)
    private String size;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "product_ingredient",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "ingredient_id")
    )
    private Set<Ingredient> ingredient;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "product_additive",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "additive_id")
    )
    private Set<Additive> additive;

    public Product() {}

    public Product(String name, Double price, String description, String image, String size, Category category) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.size = size;
        this.category = category;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name +
                ", price=" + price +
                ", description='" + description +
                ", image='" + image +
                ", size='" + size +
                ", category=" + category +
                ", ingredient=" + ingredient +
                ", additive=" + additive +
                '}';

    }

    public void setIngredients(Set<Ingredient> ingredients) {
        this.ingredient = ingredients;

    }

    public void setAdditives(Set<Additive> additives) {
        this.additive = additives;
    }
}
