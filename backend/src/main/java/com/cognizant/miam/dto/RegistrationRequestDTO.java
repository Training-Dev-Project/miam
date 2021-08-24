package com.cognizant.miam.dto;

import lombok.Getter;

@Getter
public class RegistrationRequestDTO {
    private final String name;
    private final String email;
    private final String password;

    public RegistrationRequestDTO(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

}
