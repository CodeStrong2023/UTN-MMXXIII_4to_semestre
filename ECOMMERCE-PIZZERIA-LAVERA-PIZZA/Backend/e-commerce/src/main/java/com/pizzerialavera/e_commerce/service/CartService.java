package com.pizzerialavera.e_commerce.service;

import com.pizzerialavera.e_commerce.entity.Cart;
import com.pizzerialavera.e_commerce.exception.ResourceNotFoundException;
import com.pizzerialavera.e_commerce.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;

    public Optional<Cart> findById(Long id) {
        return cartRepository.findById(id);
    }

    public List<Cart> findAll() {
        return cartRepository.findAll();
    }

    public Cart saveCart(Cart cart) {
        return cartRepository.save(cart);
    }

    public void updateCart(Cart cart) throws ResourceNotFoundException {
        if (!cartRepository.existsById(cart.getId())) {
            throw new ResourceNotFoundException("Cart not found");
        }
        cartRepository.save(cart);
    }

    public void deleteCart(Long id) throws ResourceNotFoundException {
        if (!cartRepository.existsById(id)) {
            throw new ResourceNotFoundException("Cart not found");
        }
        cartRepository.deleteById(id);
    }
}
