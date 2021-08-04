package com.cognizant.miam.controllers;

import com.cognizant.miam.dto.IngredientDTO;
import com.cognizant.miam.models.Ingredient;
import com.cognizant.miam.services.IngredientService;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/ingredient")
@CrossOrigin(origins = "http://localhost:4200")
public class IngredientController {

  private IngredientService ingredientService;

  public IngredientController(IngredientService ingredientService) {
    this.ingredientService = ingredientService;
  }


  @PostMapping
  public void addIngredients( @RequestBody IngredientDTO ingredientDTO) {
    System.out.println("Ingredient DTO : " + ingredientDTO);
    ModelMapper modelMapper = new ModelMapper();
    Ingredient ingredient = modelMapper.map(ingredientDTO, Ingredient.class);
    ingredientService.save(ingredient);
    System.out.println("Ingredient : " + ingredient);
  }


}
