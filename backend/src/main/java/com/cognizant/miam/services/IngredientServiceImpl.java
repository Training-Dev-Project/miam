package com.cognizant.miam.services;

import java.util.Optional;

import com.cognizant.miam.models.Ingredient;
import com.cognizant.miam.repositories.IngredientRepository;

import org.springframework.stereotype.Service;

@Service
public class IngredientServiceImpl implements IngredientService{

  private IngredientRepository ingredientRepository;

  public IngredientServiceImpl(IngredientRepository ingredientRepository) {
    this.ingredientRepository = ingredientRepository;
  }

  @Override
  public Optional<Ingredient> findById(long id) {
    return ingredientRepository.findById(id);
  }

  @Override
  public Ingredient save(Ingredient ingredient) {
    return ingredientRepository.save(ingredient);
  }

  @Override
  public Optional<Ingredient> deleteById(long id) {
    // TODO Auto-generated method stub
    return null;
  }

}
