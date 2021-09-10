package com.cognizant.miam.services;

import com.cognizant.miam.dto.UserDTO;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
	UserDTO register(UserDTO userDTO);

	UserDTO findByEmail(String email);

	List<UserDTO> findAll();

	void deleteUsers();
}
