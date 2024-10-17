package com.pizzerialavera.e_commerce.service;

import com.pizzerialavera.e_commerce.entity.Additive;
import com.pizzerialavera.e_commerce.repository.AdditiveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdditiveService {

    @Autowired
    private AdditiveRepository additiveRepository;

    public List<Additive> getAllAdditives() {
        return additiveRepository.findAll();
    }

    public Additive getAdditiveById(Long id) {
        return additiveRepository.findById(id).orElse(null);
    }

    public Additive createAdditive(Additive additive) {
        return additiveRepository.save(additive);
    }

    public Additive updateAdditive(Long id, Additive additiveDetails) {
        Additive additive = getAdditiveById(id);
        if (additive != null) {
            additive.setName(additiveDetails.getName());
            additive.setPrice(additiveDetails.getPrice());
            return additiveRepository.save(additive);
        }
        return null;
    }

    public void deleteAdditive(Long id) {
        additiveRepository.deleteById(id);
    }

    public void findByString(String name) {
        additiveRepository.findByName(name);
    }
}