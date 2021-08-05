package com.cognizant.miam.repositories;

import com.cognizant.miam.models.Ingredient;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
    Long deleteByName(String name);
}
