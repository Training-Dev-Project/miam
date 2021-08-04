package com.cognizant.miam.controllers;

import com.cognizant.miam.dto.RecipeDTO;
import com.cognizant.miam.models.Recipe;
import com.cognizant.miam.services.RecipeService;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/recipe")
@CrossOrigin(origins = "http://localhost:4200")
public class RecipeController {

  private RecipeService recipeService;

  public RecipeController(RecipeService recipeService) {
    this.recipeService = recipeService;
  }


  @PostMapping
  public void addRecipes(@RequestBody RecipeDTO recipeDTO) {
    System.out.println("Recipe DTO : " + recipeDTO);
    ModelMapper modelMapper = new ModelMapper();
    Recipe recipe = modelMapper.map(recipeDTO, Recipe.class);
    recipeService.save(recipe);
    System.out.println("Recipe : " + recipe);
  }


}
