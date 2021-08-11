package com.cognizant.miam.controllers;

import com.cognizant.miam.dto.RecipeDTO;
import com.cognizant.miam.services.RecipeService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping(value = "/recipe")
@CrossOrigin(origins = "http://localhost:4200")
public class RecipeController{

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

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable ("id") long id) throws Exception {
        try {
            recipeService.deleteById(id);
        }
        catch (Exception ex) {
            ex.printStackTrace();
            throw new ResponseStatusException( HttpStatus.NOT_FOUND, "Il n'existe pas de recipe avec l'id: " +id, ex);
        }
    }
}
