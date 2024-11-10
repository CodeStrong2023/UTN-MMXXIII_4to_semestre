package com.pizzerialavera.e_commerce.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;


@Getter
@Setter
@Entity
@Table(name = "customers")

public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "Unique value per entity, auto-incremental, for example = 1")
    private Long id;

    @Column
    private String name;

    @Column
    private String lastName;

    @Column(unique = true, nullable = false)
    private String cellphone;

    @Column
    private LocalDate registrationDate;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address address;

    @Column(unique = true, nullable = false)
    private String email;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.REMOVE, orphanRemoval = true)
    @JsonIgnore
    private Set<Reservation> reservations = new HashSet<>();

    public Customer(Long id, String name, String lastName, String cellphone, LocalDate registrationDate, Address address, String email) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.cellphone = cellphone;
        this.registrationDate = registrationDate;
        this.address = address;
        this.email = email;
    }

    public Customer() {
    }
    public Customer(String name, String lastName, String cellphone, LocalDate registrationDate, Address address, String email) {
        this.name = name;
        this.lastName = lastName;
        this.cellphone = cellphone;
        this.registrationDate = registrationDate;
        this.address = address;
        this.email = email;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", nombre='" + name + '\'' +
                ", apellido='" + lastName + '\'' +
                ", celular='" + cellphone + '\'' +
                ", fechaIngreso=" + registrationDate +
                ", domicilio=" + address +
                ", email='" + email + '\'' +
                '}';
    }

}
