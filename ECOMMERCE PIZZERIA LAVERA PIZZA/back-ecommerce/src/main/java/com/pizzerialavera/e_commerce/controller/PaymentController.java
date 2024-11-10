package com.pizzerialavera.e_commerce.controller;

import com.mercadopago.resources.payment.Payment;
import com.pizzerialavera.e_commerce.entity.PaymentRequest;
import com.pizzerialavera.e_commerce.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/checkout")
    public Payment processPayment(@RequestBody PaymentRequest paymentRequest) {
        return paymentService.createPayment(paymentRequest);
    }
}

