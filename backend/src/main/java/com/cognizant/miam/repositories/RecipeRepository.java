package com.cognizant.miam.repositories;

import com.cognizant.miam.models.Recipe;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
}