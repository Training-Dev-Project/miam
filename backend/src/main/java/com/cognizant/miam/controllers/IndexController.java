package com.cognizant.miam.controllers;

import com.cognizant.miam.dto.AuthenticationRequest;
import com.cognizant.miam.dto.AuthenticationResponse;
import com.cognizant.miam.jwt.TokenManager;
import com.cognizant.miam.services.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class IndexController {

	private final TokenManager tokenManager;
	private final AuthenticationManager authenticationManager;
	private final UserService userService;
	private final WebSecurityConfigurerAdapter webSecurityConfigurerAdapter;

	public IndexController(TokenManager tokenManager, AuthenticationManager authenticationManager, UserService userService, WebSecurityConfigurerAdapter webSecurityConfigurerAdapter) {
		this.tokenManager = tokenManager;
		this.authenticationManager = authenticationManager;
		this.userService = userService;
		this.webSecurityConfigurerAdapter = webSecurityConfigurerAdapter;
	}

	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return webSecurityConfigurerAdapter.authenticationManagerBean();
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
			throw new BadCredentialsException("Incorrect Username and/or Password", e);
		}
		final UserDetails userDetails = userService.loadUserByUsername(authenticationRequest.getUsername());

		final String jwt = tokenManager.generateJwtToken(userDetails);

		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
}
