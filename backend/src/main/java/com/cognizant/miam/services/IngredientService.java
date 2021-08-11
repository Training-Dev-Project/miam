package com.cognizant.miam.services;

import java.util.List;
import java.util.Optional;

import com.cognizant.miam.models.Ingredient;

public interface IngredientService {
  public List<Ingredient> findAll();
  public Optional<Ingredient> findById(long id);
  public Ingredient save(Ingredient ingredient);
  public Long deleteByName(String name);
  public void deleteById(long id) throws Exception;
}
