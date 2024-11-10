package com.pizzerialavera.e_commerce.entity;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

@Data
public class PreferenceRequest {
    private List<PreferenceItem> items; // Cambia a tu implementación
    private String successUrl;
    private String failureUrl;
    private String pendingUrl;

    // Clase interna para representar los elementos de la preferencia
    @Data
    public static class PreferenceItem {
        private String id;
        private String title;
        private BigDecimal unitPrice;
        private int quantity;
    }
}
