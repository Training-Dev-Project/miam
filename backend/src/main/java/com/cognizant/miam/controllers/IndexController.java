package com.cognizant.miam.controllers;

import com.cognizant.miam.dto.AuthenticationRequest;
import com.cognizant.miam.dto.AuthenticationResponse;
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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class IndexController {

	private final TokenManager tokenManager;
	private final UserService userService;
	private final Logger log = LoggerFactory.getLogger(IndexController.class);
	@Autowired
	private AuthenticationManager authenticationManager;

	public IndexController(TokenManager tokenManager, UserService userService) {
		this.tokenManager = tokenManager;
		this.userService = userService;
	}


	@GetMapping(value = "/")
	public String index() {
		return "/swagger-ui.html";
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
			log.warn("The thrown exception was of type " + e.getClass());
			log.warn("The thrown exception message is : " + e.getMessage());
		}
		final UserDetails userDetails = userService.loadUserByUsername(authenticationRequest.getUsername());

		final String jwt = tokenManager.generateJwtToken(userDetails);

		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
}
