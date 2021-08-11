package com.cognizant.miam.controllers;

import com.cognizant.miam.dto.RecipeDTO;
import com.cognizant.miam.services.RecipeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/recipe")
@CrossOrigin(origins = "http://localhost:4200")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }


    @PostMapping
    public @ResponseBody
    RecipeDTO addRecipe(@RequestBody RecipeDTO recipe) {
        System.out.println("Recipe DTO : " + recipe.toString());
        var result = recipeService.save(recipe);
        // System.out.println("Recipe : " + recipe.toString());
        return result;
    }


    @GetMapping
    public @ResponseBody
    List<RecipeDTO> getAllRecipe() {
        return recipeService.findAll();

    }
}
