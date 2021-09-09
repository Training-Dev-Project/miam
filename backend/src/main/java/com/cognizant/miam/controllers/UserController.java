package com.cognizant.miam.controllers;

import com.cognizant.miam.dto.UserDTO;
import com.cognizant.miam.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserController {

	private final UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	@PostMapping("/register")
	public UserDTO registerUser(@RequestBody UserDTO userDTO) {
		try {
			UserDTO result = userService.register(userDTO);
			return result;
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "EMAIL_ALREADY_USED");
		}
	}

	@GetMapping("/{email}")
	public UserDTO getByEmail(@PathVariable String email) {
		return userService.findByEmail(email);
	}

	@GetMapping
	public @ResponseBody
	List<UserDTO> getAllUsers() {
		return userService.findAll();
	}

	@DeleteMapping
	void deleteAllUsers() {
		userService.deleteUsers();
	}
}
