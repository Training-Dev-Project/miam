package com.cognizant.miam.repositories;

import java.util.List;

import com.cognizant.miam.models.RecipeIngredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RecipeIngredientRepository extends JpaRepository<RecipeIngredient, Long> {
    
    
}