package com.cognizant.miam.services;

import com.cognizant.miam.repositories.RecipeIngredientRepository;

import org.springframework.stereotype.Service;

@Service
public class RecipeIngredientServiceImpl implements RecipeIngredientService {
    private final RecipeIngredientRepository recipeIngredientRepository; 

    public RecipeIngredientServiceImpl(RecipeIngredientRepository recipeIngredientRepository){
        this.recipeIngredientRepository = recipeIngredientRepository; 
    }

    
}
