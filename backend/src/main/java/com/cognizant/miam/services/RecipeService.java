package com.cognizant.miam.services;

import java.util.Optional;

import com.cognizant.miam.models.Recipe;

public interface RecipeService {
  public Optional<Recipe> findById(long id);
  public Recipe save(Recipe recipe);
  public Optional<Recipe> deleteById(long id);
}
