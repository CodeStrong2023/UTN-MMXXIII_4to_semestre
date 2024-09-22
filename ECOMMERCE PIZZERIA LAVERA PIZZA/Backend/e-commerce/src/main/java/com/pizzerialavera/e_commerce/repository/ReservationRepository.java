package com.pizzerialavera.e_commerce.repository;

import com.pizzerialavera.e_commerce.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
