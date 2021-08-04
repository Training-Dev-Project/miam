package com.cognizant.miam.services;

import java.util.Optional;

import com.cognizant.miam.models.Ingredient;

public interface IngredientService {
  public Optional<Ingredient> findById(long id);
  public Ingredient save(Ingredient ingredient);
  public Optional<Ingredient> deleteById(long id);
}
