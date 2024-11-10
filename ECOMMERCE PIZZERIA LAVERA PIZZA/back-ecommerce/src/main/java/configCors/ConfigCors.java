package configCors;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@Configuration
public class ConfigCors implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Cambia a una ruta relativa
                .allowedOrigins("http://localhost:5173") // Permitir solo esta URL
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(true);

    }
}

