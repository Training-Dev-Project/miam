package com.cognizant.miam.services;

import java.util.Optional;

import com.cognizant.miam.models.Recipe;
import com.cognizant.miam.repositories.RecipeRepository;

import org.springframework.stereotype.Service;

@Service
public class RecipeServiceImpl implements RecipeService{

  private RecipeRepository recipeRepository;

  public RecipeServiceImpl(RecipeRepository recipeRepository) {
    this.recipeRepository = recipeRepository;
  }

  @Override
  public Optional<Recipe> findById(long id) {
    return recipeRepository.findById(id);
  }

  @Override
  public Recipe save(Recipe recipe) {
    return recipeRepository.save(recipe);
  }

  @Override
  public Optional<Recipe> deleteById(long id) {
    // TODO Auto-generated method stub
    return null;
  }

}
