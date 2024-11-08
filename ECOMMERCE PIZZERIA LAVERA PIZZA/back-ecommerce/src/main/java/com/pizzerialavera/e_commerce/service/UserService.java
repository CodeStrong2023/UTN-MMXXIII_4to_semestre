package com.pizzerialavera.e_commerce.service;

import com.pizzerialavera.e_commerce.entity.User;
import com.pizzerialavera.e_commerce.entity.UserRole;
import com.pizzerialavera.e_commerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository usuarioRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> usuarioBuscado = usuarioRepository.findByEmail(username);
        if (usuarioBuscado.isPresent()) {
            return usuarioBuscado.get(); // Asegúrate que User implementa UserDetails
        } else {
            throw new UsernameNotFoundException("Usuario inexistente: " + username);
        }
    }

    public boolean emailExists(String email) {
        return usuarioRepository.existsByEmail(email);
    }

    public User registerUser(String nombre, String userName, String email, String password, UserRole role) {
        if (emailExists(email)) {
            throw new IllegalArgumentException("El correo " + email + " ya está en uso.");
        }
        String encodedPassword = bCryptPasswordEncoder.encode(password);
        User user = new User(nombre, userName, email, encodedPassword, role);
        return usuarioRepository.save(user);
    }

    public User authenticate(String email, String password) {
        User user = usuarioRepository.findByEmail(email).orElse(null); // Corrección aquí
        if (user != null && bCryptPasswordEncoder.matches(password, user.getPassword())) {
            return user; // Las contraseñas son iguales
        }
        return null; // Credenciales inválidas
    }

    public User findUserByEmail(String email) {
        return usuarioRepository.findByEmail(email).orElse(null);
    }
}
