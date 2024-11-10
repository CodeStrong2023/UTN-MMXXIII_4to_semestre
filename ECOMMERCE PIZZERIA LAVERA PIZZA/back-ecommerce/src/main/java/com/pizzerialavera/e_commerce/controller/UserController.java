package com.pizzerialavera.e_commerce.controller;

import com.pizzerialavera.e_commerce.entity.User;
import com.pizzerialavera.e_commerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/authenticate")
    public ResponseEntity<User> authenticateUser(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");
        User user = userService.authenticate(email, password); // Cambiado para obtener el objeto User

        if (user != null) {
            return ResponseEntity.ok(user); // Devuelve el usuario autenticado
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null); // 401 si las credenciales son incorrectas
    }

    @GetMapping("/current")
    public ResponseEntity<User> getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();

        User user = userService.findUserByEmail(email);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User registeredUser = userService.registerUser(
                    user.getNombre(),
                    user.getUserName(),
                    user.getEmail(),
                    user.getPassword(), // Se guarda la contraseña cifrada
                    user.getUsuarioRole()
            );
            return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Error de integridad de datos: " + e.getMessage());
        }
    }

    @GetMapping("/roles")
    public List<String> getUserRoles() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
    }

    @GetMapping("/data")
    public Object getUserData() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication.getPrincipal();
    }
}
