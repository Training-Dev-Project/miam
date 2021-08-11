package com.cognizant.miam.services;

import com.cognizant.miam.dto.RecipeDTO;

import java.util.List;

public interface RecipeService {
    public RecipeDTO save(RecipeDTO recipe);

    List<RecipeDTO> findAll();

    void deleteById(long id);
}
