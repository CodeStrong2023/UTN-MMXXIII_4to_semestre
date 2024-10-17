package com.pizzerialavera.e_commerce.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
@Entity
@Table(name = "carts")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "Unique value for the cart", example = "1")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    @Schema(description = "Customer associated with the cart", required = true)
    private Customer customer;

    @ElementCollection
    @CollectionTable(name = "cart_products", joinColumns = @JoinColumn(name = "cart_id"))
    @MapKeyJoinColumn(name = "product_id")
    @Column(name = "quantity")
    @Schema(description = "Map of products to their quantities in the cart")
    private Map<Product, Integer> products = new HashMap<>();

    @Column(nullable = false)
    @Schema(description = "Date when the cart was created", example = "2024-09-21")
    private LocalDate creationDate;

    @Column(nullable = false)
    @Schema(description = "Total amount of the cart", example = "100.50")
    private Double totalAmount;

    @Column(length = 20)
    @Schema(description = "Status of the cart", example = "IN_PROGRESS", allowableValues = {"IN_PROGRESS", "COMPLETED", "CANCELLED"})
    private String status;

    public Cart() {}

    public Cart(Customer customer, LocalDate creationDate, Double totalAmount, String status) {
        this.customer = customer;
        this.creationDate = creationDate;
        this.totalAmount = totalAmount;
        this.status = status;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "id=" + id +
                ", customer=" + customer +
                ", creationDate=" + creationDate +
                ", totalAmount=" + totalAmount +
                ", status='" + status + '\'' +
                '}';
    }
}
