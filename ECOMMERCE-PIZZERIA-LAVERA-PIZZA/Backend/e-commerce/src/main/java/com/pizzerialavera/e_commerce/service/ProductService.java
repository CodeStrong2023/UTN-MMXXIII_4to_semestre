package com.pizzerialavera.e_commerce.service;

import com.pizzerialavera.e_commerce.entity.Product;
import com.pizzerialavera.e_commerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    //metodos manuales
    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    public List<Product> findAll(){
        return productRepository.findAll();
    }

    public Optional<Product> findById(Long id){
        return productRepository.findById(id);
    }

    public void deleteProduct(Long id){
        productRepository.deleteById(id);
    }

    public void updateProduct(Product product){
        productRepository.save(product);
    }

    public Optional<Product> findByString(String stringy) {
        return productRepository.findByName(stringy);
    }

    //public Product guardarProductEnLista(Product product){
       // return productiDaoList.guardar(product);
    //}
    //public List<Product> buscarTodosEnLista(){return productiDaoList.buscarTodos();
 //}
}
