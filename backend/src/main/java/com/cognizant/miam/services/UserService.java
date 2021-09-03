package com.cognizant.miam.services;

import com.cognizant.miam.dto.UserDTO;
import com.cognizant.miam.models.User;

import java.util.List;

public interface UserService {
    UserDTO register(UserDTO userDTO);

    UserDTO findByEmail(String email);

    List<UserDTO> findAll();
}
