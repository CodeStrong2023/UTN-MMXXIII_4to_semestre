package com.pizzerialavera.e_commerce.controller;

import com.pizzerialavera.e_commerce.entity.Product;
import com.pizzerialavera.e_commerce.exception.BadRequestException;
import com.pizzerialavera.e_commerce.exception.ResourceNotFoundException;
import com.pizzerialavera.e_commerce.service.ProductService;
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
@RequestMapping("/products")
@Tag(name = "Products Controller", description = "Allows to manage products")

public class ProductController {
    @Autowired
    private ProductService productService;

    //ahora vienen todos los metodos que nos permitan actuar como intermediarios.

    @GetMapping("/{id}")
    @Parameter(description = "Allows to search a product")
    @ApiResponse(responseCode = "200", description = "Product found successfully")
    public ResponseEntity<Product> findById(@PathVariable Long id) throws ResourceNotFoundException {
        Optional<Product> productOptional = productService.findById(id);
        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            return ResponseEntity.status(200).body(product);
        }

        throw new ResourceNotFoundException("Product not found");
    }


    @PostMapping
    @Operation(summary = "Allows to create a product", description = "Send product without id")
    @ApiResponse(responseCode = "200", description = "Product created successfully")
    public ResponseEntity<Product> saveProduct(@RequestBody Product product) throws BadRequestException {
        return ResponseEntity.status(200).body(productService.saveProduct(product));
    }

    @PutMapping
    @Parameter(description = "Allows to update a product")
    @ApiResponse(responseCode = "200", description = "Product updated successfully")
    public ResponseEntity<String> updateProduct(@RequestBody Product product) throws ResourceNotFoundException {

        Optional<Product> searchedProduct= productService.findById(product.getId());
        if(searchedProduct.isPresent()){
            productService.updateProduct(product);
            return ResponseEntity.status(200).body("Product updated successfully");
        }else{
            throw new ResourceNotFoundException("Product not found");
        }
    }

    @DeleteMapping("/{id}")
    @Parameter(description = "Allows to delete a product")
    @ApiResponse(responseCode = "200", description = "Product deleted successfully")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) throws BadRequestException {
        Optional<Product> searchedProduct= productService.findById(id);
        if(searchedProduct.isPresent()){
            productService.deleteProduct(id);
            return ResponseEntity.status(200).body("Product deleted successfully");
        }else{
            throw new BadRequestException("Product not found");
        }
    }

    @GetMapping
    @Parameter(description = "Allows to search all products")
    @ApiResponse(responseCode = "200", description = "All products found successfully")
    public ResponseEntity<List<Product>> findAll(){
        return ResponseEntity.status(200).body(productService.findAll());
    }

    @GetMapping("/identifier/{identifier}")
    @Parameter(description = "Allows to search a product by string identifier")
    @ApiResponse(responseCode = "200", description = "Product found successfully")
    public ResponseEntity<Optional<Product>> searchByString(@PathVariable String identifier) throws ResourceNotFoundException {
        Optional<Product> product = productService.findByString(identifier);  // This remains the same
        if (product.isPresent()) {
            return ResponseEntity.status(200).body(product);
        } else {
            throw new ResourceNotFoundException("Product not found");
        }
    }

}
