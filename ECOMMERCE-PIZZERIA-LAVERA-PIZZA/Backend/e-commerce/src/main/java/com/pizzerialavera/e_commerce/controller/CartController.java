package com.pizzerialavera.e_commerce.controller;

import com.pizzerialavera.e_commerce.entity.Cart;
import com.pizzerialavera.e_commerce.exception.BadRequestException;
import com.pizzerialavera.e_commerce.exception.ResourceNotFoundException;
import com.pizzerialavera.e_commerce.service.CartService;
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
@RequestMapping("/carts")
@Tag(name = "Carts Controller", description = "Allows CRUD operations for carts")
public class CartController {
    @Autowired
    private CartService cartService;

    @GetMapping("/{id}")
    @Parameter(description = "Allows to search a cart by id")
    @ApiResponse(responseCode = "200", description = "Cart found by id successfully")
    public ResponseEntity<Optional<Cart>> findById(@PathVariable Long id) throws ResourceNotFoundException {
        Optional<Cart> searchedCart = cartService.findById(id);
        if (searchedCart.isPresent()) {
            return ResponseEntity.ok(searchedCart);
        }
        throw new ResourceNotFoundException("Cart not found");
    }

    @GetMapping
    @Parameter(description = "Allows to search all carts")
    @ApiResponse(responseCode = "200", description = "All carts found successfully")
    public ResponseEntity<List<Cart>> findAll() {
        return ResponseEntity.ok(cartService.findAll());
    }

    @PostMapping
    @Operation(summary = "Allows to save a cart", description = "Allows to save a cart in the database")
    @ApiResponse(responseCode = "200", description = "Cart saved successfully")
    public ResponseEntity<Cart> saveCart(@RequestBody Cart cart) {
        return ResponseEntity.ok(cartService.saveCart(cart));
    }

    @PutMapping
    @Parameter(description = "Allows to update a cart")
    @ApiResponse(responseCode = "200", description = "Cart updated successfully")
    public ResponseEntity<String> updateCart(@RequestBody Cart cart) throws ResourceNotFoundException {
        cartService.updateCart(cart);
        return ResponseEntity.ok("Cart updated successfully");
    }

    @DeleteMapping("/{id}")
    @Parameter(description = "Allows to delete a cart by id")
    @ApiResponse(responseCode = "200", description = "Cart deleted successfully")
    public ResponseEntity<String> deleteCart(@PathVariable("id") Long id) throws BadRequestException, ResourceNotFoundException {
        cartService.deleteCart(id);
        return ResponseEntity.ok("Cart deleted successfully");
    }
}
