package com.pizzerialavera.e_commerce.security;

import com.pizzerialavera.e_commerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userService);
        provider.setPasswordEncoder(bCryptPasswordEncoder);
        return provider;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Disable CSRF protection
                .headers(headers -> headers.frameOptions(frameOptions -> frameOptions.disable())) // Enable H2 console access
                .authorizeHttpRequests(authz -> authz
                        .requestMatchers("/login", "/documentation", "/api-docs").permitAll() // Allow access to login
                        .requestMatchers("/h2/**").hasRole("ADMIN") // Allow access to H2 console
                        .anyRequest().authenticated() // All other requests require authentication
                )
                .formLogin(formLogin -> formLogin.defaultSuccessUrl("/default", true)) // Customize form login
                .logout(logout -> logout.logoutUrl("/logout").logoutSuccessUrl("/login?logout")) // Customize logout
                .authenticationProvider(daoAuthenticationProvider());

        return http.build();
    }
}

//.requestMatchers("/post_odontologos.html", "/get_odontologos.html", "/post_pacientes.html", "/get_pacientes.html")
//                        .hasRole("ADMIN") // Restrict access to ADMIN