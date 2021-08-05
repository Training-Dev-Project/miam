package com.cognizant.miam.services;

import java.util.List;
import java.util.Optional;

import com.cognizant.miam.models.Ingredient;
import com.cognizant.miam.repositories.IngredientRepository;

import javax.transaction.Transactional;

import java.lang.Exception;

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
  public List<Ingredient> findAll() {
    return ingredientRepository.findAll();
  }

  @Override
  @Transactional
  public Long deleteByName(String name) {
    return ingredientRepository.deleteByName(name);
  }

  @Override
  @Transactional
  public void deleteById(long id) throws Exception {
    ingredientRepository.deleteById(id);    
  }

}
