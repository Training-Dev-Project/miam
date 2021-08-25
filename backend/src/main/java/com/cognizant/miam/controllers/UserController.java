package com.cognizant.miam.controllers;

import com.cognizant.miam.dto.RecipeDTO;
import com.cognizant.miam.dto.UserDTO;
import com.cognizant.miam.models.User;
import com.cognizant.miam.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public UserDTO addUser(@RequestBody UserDTO userDTO) {
        var result = userService.register(userDTO);
        return result;
    }

    @GetMapping("/{email}")
    public UserDTO getByEmail(@PathVariable String email) { return userService.findByEmail(email); }

    @GetMapping
    public @ResponseBody List<UserDTO> getAllUsers() {
        return userService.findAll();
    }
}
