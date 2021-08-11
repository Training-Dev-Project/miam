package com.cognizant.miam.controllers;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Optional;

import javax.swing.plaf.synth.SynthSpinnerUI;

import com.cognizant.miam.dto.IngredientDTO;
import com.cognizant.miam.models.Ingredient;
import com.cognizant.miam.services.IngredientService;

import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;

@RestController
@RequestMapping(value = "/ingredient")
public class IngredientController {

  private IngredientService ingredientService;
  private ModelMapper modelMapper = new ModelMapper();

  public IngredientController(IngredientService ingredientService) {
    this.ingredientService = ingredientService;
  }

  @PostMapping
  public ResponseEntity<Ingredient> addIngredients(@RequestBody IngredientDTO ingredientDTO) {
    Ingredient ingredient = modelMapper.map(ingredientDTO, Ingredient.class);
    ingredient = ingredientService.save(ingredient);
    return new ResponseEntity<>(ingredient, HttpStatus.OK);
  }

  @GetMapping
  public List<IngredientDTO> getAllIngredients(){
    List<Ingredient> ingredients = ingredientService.findAll();
    List<IngredientDTO> ingredientDTOs = ingredients.stream()
                  .map(ingredient -> modelMapper.map(ingredient, IngredientDTO.class))
                  .collect(Collectors.toList());
    return ingredientDTOs; 
  }

  @DeleteMapping("/{name}")
  public void deleteIngredient(@PathVariable ("name") String name) {
    ingredientService.deleteByName(name);
  }
  @DeleteMapping("/delete/{id}")
  public void deleteById(@PathVariable ("id") long id) throws Exception {
    try {
      ingredientService.deleteById(id);
    }
    catch (Exception ex) {
      throw new ResponseStatusException( HttpStatus.NOT_FOUND, "Il n'existe pas l'ingrédient avec l'id: " +id, ex);
    }
  }

}
