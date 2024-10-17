package com.pizzerialavera.e_commerce.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "addresses")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String street;
    @Column
    private Integer number;
    @Column
    private String city;
    @Column
    private String state;

    public Address(String street, Integer number, String city, String state) {
        this.street = street;
        this.number = number;
        this.city = city;
        this.state = state;
    }

    public Address(Long id, String street, Integer number, String city, String state) {
        this.id = id;
        this.street = street;
        this.number = number;
        this.city = city;
        this.state = state;
    }

    public Address() {
    }

    @Override
    public String toString() {
        return "Domicilio{" +
                "id=" + id +
                ", calle='" + street + '\'' +
                ", numero=" + number +
                ", localidad='" + city + '\'' +
                ", provincia='" + state + '\'' +
                '}';
    }
}
