package com.cognizant.miam.controllers;

import com.cognizant.miam.dto.UserDTO;
import com.cognizant.miam.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/register")
@AllArgsConstructor
public class UserController {

    public UserService userService;

    @PostMapping
    public String register(@RequestBody UserDTO userDTO) {
        return userService.register(userDTO);
    }
}
