package com.pizzerialavera.e_commerce.service;

import com.pizzerialavera.e_commerce.entity.Reservation;
import com.pizzerialavera.e_commerce.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    public Reservation saveReservation(Reservation reservation){
        return reservationRepository.save(reservation);
    }

    public List<Reservation>findAll(){
        return reservationRepository.findAll();
    }

    public Optional<Reservation> findById(Long id){
        return reservationRepository.findById(id);
    }

    public void deleteReservation(Long id){
        reservationRepository.deleteById(id);
    }

    public void updateReservation(Reservation reservation){
        reservationRepository.save(reservation);
    }





}
