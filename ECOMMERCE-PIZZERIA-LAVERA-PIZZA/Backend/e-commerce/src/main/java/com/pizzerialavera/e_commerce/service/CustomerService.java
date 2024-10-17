package com.pizzerialavera.e_commerce.service;

import com.pizzerialavera.e_commerce.entity.Customer;
import com.pizzerialavera.e_commerce.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    //metodos manuales
    public Customer saveCustomer(Customer customer){
        return customerRepository.save(customer);
    }
    public Optional<Customer> findById(Long id){
        return customerRepository.findById(id);
    }
    public List<Customer> findAll(){return customerRepository.findAll();}
    public Optional<Customer> findByEmail(String email){
        return customerRepository.findByEmail(email);
    }

    //public Optional<Customer> findByCedula(String cedula) {
      //  return customerRepository.findByCedula(cedula);
    //}

    public void updateCustomer(Customer customer){
        customerRepository.save(customer);
    }

    public void deleteCustomer(Long id){
        customerRepository.deleteById(id);
    }

}
