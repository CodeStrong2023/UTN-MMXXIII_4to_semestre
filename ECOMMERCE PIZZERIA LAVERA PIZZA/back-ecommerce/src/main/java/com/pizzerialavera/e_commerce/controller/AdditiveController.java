package com.pizzerialavera.e_commerce.controller;

import com.pizzerialavera.e_commerce.entity.Additive;
import com.pizzerialavera.e_commerce.service.AdditiveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/additives")
public class AdditiveController {

    @Autowired
    private AdditiveService additiveService;

    @GetMapping
    public List<Additive> getAllAdditives() {
        return additiveService.getAllAdditives();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Additive> getAdditiveById(@PathVariable Long id) {
        Additive additive = additiveService.getAdditiveById(id);
        if (additive != null) {
            return ResponseEntity.ok(additive);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public Additive createAdditive(@RequestBody Additive additive) {
        return additiveService.createAdditive(additive);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Additive> updateAdditive(@PathVariable Long id, @RequestBody Additive additiveDetails) {
        Additive updatedAdditive = additiveService.updateAdditive(id, additiveDetails);
        if (updatedAdditive != null) {
            return ResponseEntity.ok(updatedAdditive);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdditive(@PathVariable Long id) {
        additiveService.deleteAdditive(id);
        return ResponseEntity.noContent().build();
    }


}
