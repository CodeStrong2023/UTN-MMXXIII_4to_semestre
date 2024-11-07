package com.pizzerialavera.e_commerce.service;

import com.mercadopago.MercadoPagoConfig;
import com.mercadopago.client.payment.PaymentClient;
import com.mercadopago.client.payment.PaymentCreateRequest;
import com.mercadopago.client.payment.PaymentPayerRequest;
import com.mercadopago.resources.payment.Payment;
import com.pizzerialavera.e_commerce.entity.PaymentRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class PaymentService {

    @Value("${mercado_pago_ACCESS_TOKEN}")
    private String accessToken;

    public Payment createPayment(PaymentRequest paymentRequest) {
        MercadoPagoConfig.setAccessToken(accessToken); // Usar el Access Token de properties
        PaymentClient client = new PaymentClient();

        PaymentCreateRequest createRequest = PaymentCreateRequest.builder()
                .transactionAmount(paymentRequest.getTransactionAmount())
                .token(paymentRequest.getToken())
                .description(paymentRequest.getDescription())
                .installments(paymentRequest.getInstallments())
                .paymentMethodId(paymentRequest.getPaymentMethodId())
                .payer(PaymentPayerRequest.builder().email(paymentRequest.getPayerEmail()).build())
                .build();

        try {
            return client.create(createRequest);
        } catch (Exception ex) {
            ex.printStackTrace();
            return null; // o lanzar una excepción personalizada
        }
    }
}
