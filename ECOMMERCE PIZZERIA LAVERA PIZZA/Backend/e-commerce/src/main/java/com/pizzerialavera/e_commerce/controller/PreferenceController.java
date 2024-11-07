package com.pizzerialavera.e_commerce.controller;

import com.mercadopago.resources.preference.Preference;
import com.pizzerialavera.e_commerce.entity.PreferenceRequest;
import com.pizzerialavera.e_commerce.service.PreferenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PreferenceController {

    @Autowired
    private PreferenceService preferenceService;

    @PostMapping("/create-preference")
    public Preference createPreference(@RequestBody PreferenceRequest preferenceRequest) {
        return preferenceService.createPreference(preferenceRequest);
    }
}
