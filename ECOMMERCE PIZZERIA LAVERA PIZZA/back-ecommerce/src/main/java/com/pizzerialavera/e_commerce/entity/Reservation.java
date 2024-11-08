package com.pizzerialavera.e_commerce.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@Entity
@Table(name = "reservations")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "Unique value for the reservation", required = false, example = "1")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    @JsonIgnoreProperties("reservations")
    @Schema(description = "Customer who made the reservation", required = false)
    private Customer customer;

    @Column(nullable = false)
    @Schema(description = "Date of the reservation", example = "2024-09-21")
    private LocalDate date;

    @Column(nullable = false)
    @Schema(description = "Time of the reservation", example = "19:30")
    private LocalTime time;

    @Column(nullable = false)
    @Schema(description = "Number of people for the reservation", example = "4")
    private int numberOfPeople;

    @Column(length = 20)
    @Schema(description = "Status of the reservation", example = "CONFIRMED", allowableValues = {"PENDING", "CONFIRMED", "CANCELLED"})
    private String status;

    @Column(length = 255)
    @Schema(description = "Additional notes or special requests", example = "Table near the window")
    private String notes;

    public Reservation(Long id, Customer customer, LocalDate date, LocalTime time, int numberOfPeople, String status, String notes) {
        this.id = id;
        this.customer = customer;
        this.date = date;
        this.time = time;
        this.numberOfPeople = numberOfPeople;
        this.status = status;
        this.notes = notes;
    }

    public Reservation(Customer customer, LocalDate date, LocalTime time, int numberOfPeople, String status, String notes) {
        this.customer = customer;
        this.date = date;
        this.time = time;
        this.numberOfPeople = numberOfPeople;
        this.status = status;
        this.notes = notes;
    }

    public Reservation() {}

    @Override
    public String toString() {
        return "Reservation{" +
                "id=" + id +
                ", customer=" + customer +
                ", date=" + date +
                ", time=" + time +
                ", numberOfPeople=" + numberOfPeople +
                ", status='" + status + '\'' +
                ", notes='" + notes + '\'' +
                '}';
    }
}
