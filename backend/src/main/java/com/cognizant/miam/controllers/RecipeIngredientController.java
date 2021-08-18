package com.cognizant.miam.controllers;


import com.cognizant.miam.services.RecipeIngredientService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping(value = "/recipeIngredients")
@CrossOrigin(origins = "http://localhost:4200")
public class RecipeIngredientController {
    private final RecipeIngredientService recipeIngredientService; 

    public RecipeIngredientController(RecipeIngredientService recipeIngredientService){
        this.recipeIngredientService = recipeIngredientService; 
    }

    

    
}
