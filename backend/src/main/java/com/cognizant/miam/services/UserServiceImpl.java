package com.cognizant.miam.services;

import com.cognizant.miam.dto.UserDTO;
import com.cognizant.miam.models.User;
import com.cognizant.miam.repositories.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private BCryptPasswordEncoder bCryptPasswordEncoder;
    private UserRepository userRepository;

    public UserServiceImpl(BCryptPasswordEncoder bCryptPasswordEncoder, UserRepository userRepository) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userRepository = userRepository;
    }

    @Override
    public String register(UserDTO userDTO) {
        userRepository.save(
                User.Builder.newInstance()
                        .setName(userDTO.getName())
                        .setEmail(userDTO.getEmail())
                        .setPassword(userDTO.getPassword()).build()
        );
        return "User registered";
    }
}
