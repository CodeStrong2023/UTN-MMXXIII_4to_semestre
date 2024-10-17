package com.pizzerialavera.e_commerce.service;

import com.pizzerialavera.e_commerce.entity.User;
import com.pizzerialavera.e_commerce.entity.UserRole;
import com.pizzerialavera.e_commerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository usuarioRepository;
    //aca necesitamos un metodo que nos devuelva la autenticación

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //como resolvemos?
        Optional<User> usuarioBuscado= usuarioRepository.findByEmail(username);
        if(usuarioBuscado.isPresent()){
            return usuarioBuscado.get();
        }else{
            throw new UsernameNotFoundException("usuario inexistente: "+username);
        }

    }
    // Método para verificar si el email ya existe
    public boolean emailExists(String email) {
        return usuarioRepository.existsByEmail(email);
    }

    // Método para registrar un nuevo usuario
    public User registerUser(String nombre, String userName, String email, String password, UserRole role) {
        if (emailExists(email)) {
            throw new IllegalArgumentException("El correo " + email + " ya está en uso.");
        }

        User user = new User(nombre, userName, email, password, role);
        return usuarioRepository.save(user);
    }



}
