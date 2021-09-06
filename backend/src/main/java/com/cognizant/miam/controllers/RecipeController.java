package com.cognizant.miam.controllers;

import com.cognizant.miam.dto.RecipeDTO;
import com.cognizant.miam.exceptions.recipes.RecipeException;
import com.cognizant.miam.services.RecipeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping(value = "/recipe")
@CrossOrigin(origins = "http://localhost:4200")
public class RecipeController{

    private static final Logger logger = LoggerFactory.getLogger(RecipeController.class);
    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }


    @PostMapping
    public @ResponseBody ResponseEntity<RecipeDTO> addRecipe(@RequestBody RecipeDTO recipe) {
        logger.info("Recipe DTO added");
        try{
            return new ResponseEntity<>(recipeService.save(recipe),HttpStatus.OK);
        }catch (RecipeException e){
            logger.info(e.getMessage());
            return new ResponseEntity<>(recipe,HttpStatus.BAD_REQUEST);
        }

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
