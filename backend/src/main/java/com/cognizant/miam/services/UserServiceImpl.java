package com.cognizant.miam.services;

import com.cognizant.miam.dto.UserDTO;
import com.cognizant.miam.models.User;
import com.cognizant.miam.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserServiceImpl implements UserService {

    //private BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        //this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userRepository = userRepository;
    }

    @Override
    public UserDTO register(UserDTO userDTO) {

        // ENCODE
        // String password = userDTO.getPassword();

        //Save
        final User user = userRepository.save(
                User.Builder.newInstance()
                        .setName(userDTO.getName())
                        .setEmail(userDTO.getEmail())
                        .setPassword(userDTO.getPassword()).build()
        );

        userDTO.setId(user.getId());
        return userDTO;
    }

    @Override
    public UserDTO findByEmail(String email) {
        User user = userRepository.findByEmail(email);

        return UserDTO.Builder.newInstance()
                .setName(user.getName())
                .setEmail(user.getEmail())
                .setPassword(user.getPassword())
                .setId(user.getId()).build();
    }

    @Override
    public List<UserDTO> findAll() {
        List<UserDTO> userDTOS = new ArrayList<>();
        List<User> users = userRepository.findAll();

        userDTOS = users.stream().map(user -> {
                    return UserDTO.Builder.newInstance()
                            .setName(user.getName())
                            .setEmail(user.getEmail())
                            .setPassword(user.getPassword())
                            .setId(user.getId())
                            .build();
                }
        ).collect(Collectors.toList());

        return userDTOS;
    }
}
