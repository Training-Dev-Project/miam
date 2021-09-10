package com.cognizant.miam.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import com.cognizant.miam.dto.IngredientDTO;
import com.cognizant.miam.models.Ingredient;
import com.cognizant.miam.services.IngredientService;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequestMapping(value = "/ingredient")
public class IngredientController {

  private IngredientService ingredientService;
  private ModelMapper modelMapper = new ModelMapper();

  public IngredientController(IngredientService ingredientService) {
    this.ingredientService = ingredientService;
  }

  @PostMapping
  public ResponseEntity<Ingredient> addIngredients(@RequestBody IngredientDTO ingredientDTO){
    Ingredient ingredient = modelMapper.map(ingredientDTO, Ingredient.class);
    ingredient = ingredientService.save(ingredient);
    return new ResponseEntity<>(ingredient, HttpStatus.OK);
  }
  @GetMapping
  public ResponseEntity<List<IngredientDTO>> getAllIngredients(){
    List<Ingredient> ingredients = ingredientService.findAll();
    List<IngredientDTO> ingredientDTOs = ingredients.stream()
                  .map(ingredient -> modelMapper.map(ingredient, IngredientDTO.class))
                  .collect(Collectors.toList());
    return new ResponseEntity<>(ingredientDTOs, HttpStatus.OK);
  }
  @GetMapping("/id/{id}")
  public ResponseEntity<IngredientDTO> getIngredient(@PathVariable ("id") long id){
    Optional<Ingredient> ingredient = ingredientService.findById(id);
    IngredientDTO ingredientDTO = new IngredientDTO();
    ingredientDTO.setId(id);
    ingredientDTO.setName(ingredient.get().getName());

    //modelMapper.map(ingredient,IngredientDTO.class)
    return new ResponseEntity<>(ingredientDTO, HttpStatus.OK);
  }

  @GetMapping("/{ids}")
  public ResponseEntity<List<IngredientDTO>> getIngredientsByIds(@PathVariable ("ids") ArrayList<Long> ids){
    List<Ingredient> ingredients = ingredientService.findAllByIds(ids);
    List<IngredientDTO> ingredientDTOs = ingredients.stream()
            .map(ingredient -> modelMapper.map(ingredient, IngredientDTO.class))
            .collect(Collectors.toList());
    return new ResponseEntity<>(ingredientDTOs, HttpStatus.OK);
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
    catch(Exception ex) {
      throw new ResponseStatusException( HttpStatus.BAD_REQUEST, "INGREDIENT_USED");
    }
  }

  @GetMapping("/find")
  public ResponseEntity<List<IngredientDTO>> findByNameContaining(@RequestParam(required=false) String keyword) {
    if(keyword == null) {
      return getAllIngredients();
    }
    List<Ingredient> ingredients = ingredientService.findByNameContainingIgnoreCase(keyword);
    List<IngredientDTO> ingredientDTOs = ingredients.stream()
                  .map(ingredient -> modelMapper.map(ingredient, IngredientDTO.class))
                  .collect(Collectors.toList());
    return new ResponseEntity<>(ingredientDTOs, HttpStatus.OK);
  }

}
