package com.cognizant.miam.services;

import java.util.List;
import java.util.Optional;

import com.cognizant.miam.commons.ErrorCode;
import com.cognizant.miam.exceptions.ingredients.IngredientException;
import com.cognizant.miam.models.Ingredient;
import com.cognizant.miam.repositories.IngredientRepository;
import javax.transaction.Transactional;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class IngredientServiceImpl implements IngredientService{

  private IngredientRepository ingredientRepository;


  public IngredientServiceImpl(IngredientRepository ingredientRepository ) {
    this.ingredientRepository = ingredientRepository;
  }

  /**
   *
   * @param id
   * @return
   */
  @Override
  public Optional<Ingredient> findById(long id) {
    return ingredientRepository.findById(id);
  }

  /**
   *
   * @param ingredient
   * @return
   */
  @Override
  public Ingredient save(Ingredient ingredient){
    if(this.ingredientRepository.findByName(ingredient.getName()) !=null){
      IngredientException ingredientException = new IngredientException("Constraint violation of name: "+ingredient.getName() +" must be unique");
      ingredientException.setErrorCode(ErrorCode.INGREDIENT_ALREADY_EXISTS);
      ingredientException.setStatus(HttpStatus.CONFLICT);
      throw ingredientException;
    }
    return this.ingredientRepository.save(ingredient);
  }


  /**
   *
   * @return
   */
  @Override
  public List<Ingredient> findAll() {
    return ingredientRepository.findAll();
  }

  /**
   *
   * @param name
   * @return
   */
  @Override
  @Transactional
  public Long deleteByName(String name) {
    return ingredientRepository.deleteByName(name);
  }

  /**
   *
   * @param id
   */
  @Transactional
  public void deleteById(long id){
      ingredientRepository.deleteById(id);
  }
}
