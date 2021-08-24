package com.cognizant.miam.services;

import com.cognizant.miam.dto.RegistrationRequestDTO;
import org.springframework.stereotype.Service;

@Service
public class RegistrationServiceImpl implements RegistrationService {
    @Override
    public String register(RegistrationRequestDTO registrationRequest) {
        return "User registered";
    }
}
