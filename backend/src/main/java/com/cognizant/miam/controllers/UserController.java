package com.cognizant.miam.controllers;

import com.cognizant.miam.dto.AuthenticationRequest;
import com.cognizant.miam.dto.AuthenticationResponse;
import com.cognizant.miam.dto.UserDTO;
import com.cognizant.miam.jwt.TokenManager;
import com.cognizant.miam.services.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserController {


	private final UserService userService;
	private final TokenManager tokenManager;
	private final Logger log = LoggerFactory.getLogger(UserController.class);
	@Autowired
	private AuthenticationManager authenticationManager;

	public UserController(UserService userService) {
		this.userService = userService;
		tokenManager = new TokenManager();
	}

	@PostMapping("/register")
	public UserDTO registerUser(@RequestBody UserDTO userDTO) {
		try {
			return userService.register(userDTO);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "EMAIL_ALREADY_USED");
		}
	}

	@PostMapping("/login")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest)
			throws AuthenticationException {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					authenticationRequest.getUsername(), authenticationRequest.getPassword()));
		} catch (BadCredentialsException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "BAD CREDENTIALS");
		} catch (Exception e) {
			log.warn(new StringBuilder().append("The thrown exception was of type ").append(e.getClass()).toString());
			log.warn(new StringBuilder().append("The thrown exception message is : ").append(e.getMessage()).toString());
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		final UserDetails userDetails = userService.loadUserByUsername(authenticationRequest.getUsername());

		final String jwt = tokenManager.generateJwtToken(userDetails);

		return ResponseEntity.ok(new AuthenticationResponse(jwt));
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
	public void deleteAllUsers() {
		userService.deleteUsers();
	}
}
