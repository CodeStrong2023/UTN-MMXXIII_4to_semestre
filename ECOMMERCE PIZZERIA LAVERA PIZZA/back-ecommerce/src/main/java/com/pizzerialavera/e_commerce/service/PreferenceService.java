package com.pizzerialavera.e_commerce.service;

import com.mercadopago.MercadoPagoConfig;
import com.mercadopago.client.preference.PreferenceClient;
import com.mercadopago.client.preference.PreferenceRequest;
import com.mercadopago.client.preference.PreferenceItemRequest;
import com.mercadopago.client.preference.PreferencePayerRequest;
import com.mercadopago.client.preference.PreferenceBackUrlsRequest;
import com.mercadopago.net.MPResponse;
import com.mercadopago.resources.preference.Preference;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.mercadopago.exceptions.MPApiException;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

@Service
public class PreferenceService {

    @Value("${mercado_pago_ACCESS_TOKEN}")
    private String accessToken;

    private static final Logger logger = LogManager.getLogger(PreferenceService.class);

    public Preference createPreference(com.pizzerialavera.e_commerce.entity.PreferenceRequest preferenceRequest) {
        MercadoPagoConfig.setAccessToken(accessToken);
        PreferenceClient client = new PreferenceClient();

        // Crear un item de preferencia
        List<PreferenceItemRequest> items = new ArrayList<>();
        for (com.pizzerialavera.e_commerce.entity.PreferenceRequest.PreferenceItem item : preferenceRequest.getItems()) {
            PreferenceItemRequest itemRequest = PreferenceItemRequest.builder()
                    .id(item.getId())
                    .title(item.getTitle())
                    .unitPrice(item.getUnitPrice())
                    .quantity(item.getQuantity())
                    .build();
            items.add(itemRequest);
        }

        // Crear la solicitud de preferencia
        PreferenceRequest preferenceRequestToSend = PreferenceRequest.builder()
                .items(items)
                .backUrls(PreferenceBackUrlsRequest.builder()
                        .success(preferenceRequest.getSuccessUrl())
                        .failure(preferenceRequest.getFailureUrl())
                        .pending(preferenceRequest.getPendingUrl())
                        .build())
                .autoReturn("all")
                .payer(PreferencePayerRequest.builder()
                        .name("Test")
                        .surname("User")
                        .email("your_test_email@example.com")
                        .build())
                .build();

        // Crear la preferencia con manejo detallado de excepciones
        try {
            Preference preference = client.create(preferenceRequestToSend);

            // Log de la respuesta cuando el código de estado es 200
            if (preference != null) {
                logger.info("Preferencia creada exitosamente: {}", preference);
            }

            return preference;
        } catch (MPApiException e) {
            int statusCode = e.getStatusCode();
            MPResponse apiResponse = e.getApiResponse();
            String content = apiResponse != null ? apiResponse.getContent() : "No response content available";

            logger.error("Código de estado de error: {}", statusCode);
            logger.error("Contenido de la respuesta: {}", content, e);

            return null;
        } catch (Exception e) {
            logger.error("Error inesperado en la creación de la preferencia", e);
            return null;
        }
    }
    }
