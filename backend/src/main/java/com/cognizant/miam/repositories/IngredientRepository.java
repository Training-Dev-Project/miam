package com.cognizant.miam.repositories;

import com.cognizant.miam.models.Ingredient;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Set;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
    Long deleteByName(String name);

    @Query("SELECT i From Ingredient i WHERE i.id IN (:ids)")
    Set<Ingredient> findIngredients(Set<Long> ids);

}
