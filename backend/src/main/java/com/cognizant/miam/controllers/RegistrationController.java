package com.cognizant.miam.controllers;

import com.cognizant.miam.dto.RegistrationRequestDTO;
import com.cognizant.miam.services.RegistrationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/register")
@AllArgsConstructor
public class RegistrationController {

    public RegistrationService registrationService;

    @PostMapping
    public String register(@RequestBody RegistrationRequestDTO request) {
        return registrationService.register(request);
    }
}
