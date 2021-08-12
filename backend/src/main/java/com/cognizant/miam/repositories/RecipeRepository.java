package com.cognizant.miam.repositories;

import com.cognizant.miam.models.Recipe;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {

    void deleteById(long id);
}