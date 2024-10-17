package com.pizzerialavera.e_commerce.controller;

import com.pizzerialavera.e_commerce.entity.Customer;
import com.pizzerialavera.e_commerce.exception.BadRequestException;
import com.pizzerialavera.e_commerce.exception.ResourceNotFoundException;
import com.pizzerialavera.e_commerce.service.CustomerService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//@Controller //<-- es controller pq vamos a usar una tecnologia de vista
@RestController
@RequestMapping("/customers")
@Tag(name = "Customers Controller", description = "Allows CRUD operations for customers")

public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @GetMapping("/{id}") //--> nos permite buscar un customer por id
    @Parameter(description = "Allows to search a customer by id")
    @ApiResponse(responseCode = "200", description = "Customer found by id successfully")
    public ResponseEntity<Optional<Customer>> findById(@PathVariable Long id) throws ResourceNotFoundException {
        Optional<Customer> searchedCustomer= customerService.findById(id);
        if(searchedCustomer.isPresent()){
            return ResponseEntity.status(200).body(searchedCustomer);
        }

        throw new ResourceNotFoundException("Customer not found");
    }

    @GetMapping
    @Parameter(description = "Allows to search all customers")
    @ApiResponse(responseCode = "200", description = "All customers found successfully")
    public ResponseEntity<List<Customer>> findAll(){
        return ResponseEntity.status(200).body(customerService.findAll());
    }

    /*@GetMapping("/cedula/{cedula}")
    @Parameter(description = "Nos permite buscar un customer por cedula")
    @ApiResponse(responseCode = "200", description = "Customer encontrado por cedula con éxito")
    public ResponseEntity<Optional<Customer>> buscarPorCedula(@PathVariable String cedula) throws ResourceNotFoundException {
        Optional<Customer> customerBuscado = customerService.buscarPorCedula(cedula);
        if (customerBuscado.isPresent()) {
            return ResponseEntity.status(200).body(Optional.of(customerBuscado.get()));
        } else {
            throw new ResourceNotFoundException("Customer no encontrado");
        }
    }*/

    @PostMapping //--> nos permite persistir los datos que vienen desde la vista
    @Operation(summary = "Allows to save a customer", description = "Allows to save a customer in the database")
    @ApiResponse(responseCode = "200", description = "Customer saved successfully")
    public ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer){
        return ResponseEntity.status(200).body(customerService.saveCustomer(customer));
    }

    @PutMapping
    @Parameter(description = "Allows to update a customer")
    @ApiResponse(responseCode = "200", description = "Customer updated successfully")
    public ResponseEntity<String> actualizarCustomer(@RequestBody Customer customer) throws ResourceNotFoundException {

        Optional<Customer> customerBuscado= customerService.findById(customer.getId());
        if(customerBuscado.isPresent()){
            customerService.updateCustomer(customer);
            return ResponseEntity.status(200).body("Customer updated successfully");
        }else{
            throw new ResourceNotFoundException("Customer not found");
        }

    }

    @DeleteMapping("/{id}")
    @Parameter(description = "Allows to delete a customer by id")
    @ApiResponse(responseCode = "200", description = "Customer deleted successfully")
    public ResponseEntity<String> deleteCustomer(@PathVariable("id") Long id) throws BadRequestException {
        Optional<Customer> searchedCustomer = customerService.findById(id);
        if(searchedCustomer.isPresent()){
            customerService.deleteCustomer(id);
            return ResponseEntity.status(200).body("Customer deleted successfully");
        }else{
            throw new BadRequestException("Customer not found");
        }
    }

    /*@GetMapping("/search/{email}")
    @Parameter(description = "Allows to search a customer by email")
    @ApiResponse(responseCode = "200", description = "Customer found by email successfully")
    public ResponseEntity<Optional<Customer>> buscarPorEmail(@PathVariable String email) throws ResourceNotFoundException {
        Optional<Customer> customerBuscado= customerService.buscarPorEmail(email);
        if(customerBuscado.isPresent()){
            return ResponseEntity.status(200).body(customerBuscado);
        }else{
            throw new ResourceNotFoundException("Customer not found");
        }
    } */

}
