package com.pizzerialavera.e_commerce.controller;

import com.pizzerialavera.e_commerce.entity.Product;
import com.pizzerialavera.e_commerce.entity.Customer;
import com.pizzerialavera.e_commerce.entity.Reservation;
import com.pizzerialavera.e_commerce.exception.BadRequestException;
import com.pizzerialavera.e_commerce.exception.ResourceNotFoundException;
import com.pizzerialavera.e_commerce.service.ProductService;
import com.pizzerialavera.e_commerce.service.CustomerService;
import com.pizzerialavera.e_commerce.service.ReservationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reservations")
@Tag(name = "Reservations Controller", description = "Allows CRUD operations with reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;
    @Autowired
    private CustomerService customerService;
    @Autowired
    private ProductService productService;


    @PostMapping
    @Operation(summary = "Allows to create reservations", description = "Send Reservation without id")
    @ApiResponse(responseCode = "200", description = "Reservation created successfully")
    public ResponseEntity<Reservation> saveReservation(@RequestBody Reservation reservation) throws BadRequestException {
        Optional<Customer> searchedCustomer= customerService.findById(reservation.getCustomer().getId());

        if(searchedCustomer.isPresent()){
            reservation.setCustomer(searchedCustomer.get());
            return ResponseEntity.status(200).body(reservationService.saveReservation(reservation));
        } else {
            throw new BadRequestException("Customer not found");
        }
    }

    @GetMapping("/{id}")
    @Parameter(description = "Allows to search a reservation by id")
    @ApiResponse(responseCode = "200", description = "Reservation found successfully")
    public ResponseEntity<Optional<Reservation>> findById(@PathVariable Long id) throws ResourceNotFoundException {
        Optional<Reservation> searchedReservation= reservationService.findById(id);
        if(searchedReservation.isPresent()){
            return ResponseEntity.status(200).body(searchedReservation);
        }else{
            throw new ResourceNotFoundException("Reservation not found");
        }
    }

    @GetMapping
    @Parameter(description = "Allows to search all reservations")
    @ApiResponse(responseCode = "200", description = "Reservations found successfully")
    public ResponseEntity<List<Reservation>> findAll(){
        return ResponseEntity.status(200).body(reservationService.findAll());
    }

    @DeleteMapping("/{id}")
    @Parameter(description = "Allows to delete a reservation by id")
    @ApiResponse(responseCode = "200", description = "Reservation deleted successfully")
    public ResponseEntity<String> deleteReservation(@PathVariable Long id) throws BadRequestException{
        Optional<Reservation> searchedReservation= reservationService.findById(id);
        if(searchedReservation.isPresent()){
            reservationService.deleteReservation(id);
            return ResponseEntity.status(200).body("Reservation deleted successfully");
        }else{
            throw new BadRequestException("Reservation not found");
        }
    }

    @PutMapping
    @Parameter(description = "Allows to update a reservation")
    @ApiResponse(responseCode = "200", description = "Reservation updated successfully")
    public ResponseEntity<String> updateReservation(@RequestBody Reservation reservation) throws ResourceNotFoundException {
        Optional<Reservation> searchedReservation= reservationService.findById(reservation.getId());
        if(searchedReservation.isPresent()){
            reservationService.updateReservation(reservation);
            return ResponseEntity.status(200).body("Reservation updated successfully");
        }else{
            throw new ResourceNotFoundException("Reservation not found");
        }
    }

}
