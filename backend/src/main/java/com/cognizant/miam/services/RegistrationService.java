package com.cognizant.miam.services;

import com.cognizant.miam.dto.RegistrationRequestDTO;

public interface RegistrationService {
    String register(RegistrationRequestDTO registrationRequest);
}
