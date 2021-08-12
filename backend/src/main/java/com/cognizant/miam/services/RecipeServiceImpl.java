package com.cognizant.miam.services;

import com.cognizant.miam.dto.RecipeDTO;
import com.cognizant.miam.models.Ingredient;
import com.cognizant.miam.models.Recipe;
import com.cognizant.miam.models.RecipeIngredient;
import com.cognizant.miam.repositories.IngredientRepository;
import com.cognizant.miam.repositories.RecipeIngredientRepository;
import com.cognizant.miam.repositories.RecipeRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class RecipeServiceImpl implements RecipeService {
    private final RecipeRepository recipeRepository;
    private final IngredientRepository ingredientRepository;
    private final RecipeIngredientRepository recipeIngredientRepository;

    public RecipeServiceImpl(RecipeRepository recipeRepository, IngredientRepository ingredientRepository, RecipeIngredientRepository recipeIngredientRepository) {
        this.ingredientRepository = ingredientRepository;
        this.recipeIngredientRepository = recipeIngredientRepository;
        this.recipeRepository = recipeRepository;
    }

    @Override
    public RecipeDTO save(RecipeDTO recipe) {
        final Recipe createdRecipe = recipeRepository.save(
                Recipe.Builder.newInstance()
                        .setInstructions(recipe.getInstructions())
                        .setName(recipe.getName()).build()
        );
        Map<Long, Ingredient> ingredients = ingredientRepository.findIngredients(recipe.getIngredients().keySet())
                .stream()
                .collect(Collectors.toMap(Ingredient::getId, i -> i));
        for (Map.Entry<Long, Double> ingredient : recipe.getIngredients().entrySet()) {
            final RecipeIngredient entry = new RecipeIngredient();
            entry.setRecipe(createdRecipe);
            entry.setQuantity(ingredient.getValue());
            entry.setIngredient(ingredients.get(ingredient.getKey()));
            this.recipeIngredientRepository.save(entry);
        }
        // TODO: Entity to DTO
        recipe.setId(createdRecipe.getId());
        return recipe;
    }

    @Override
    public List<RecipeDTO> findAll() {
        List<RecipeDTO> recipeDTOS = new ArrayList<>();
        try {
            List<Recipe> recipes = recipeRepository.findAll();

            recipeDTOS = recipes.stream()
                    .map(recipe -> {
                                return RecipeDTO.Builder.newInstance()
                                        .setId(recipe.getId())
                                        .setInstructions(recipe.getInstructions())
                                        .setName(recipe.getName()).build();
                            }
                    )
                    .collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
        }

        return recipeDTOS;
    }


    @Override
    @Transactional
    public void deleteById(long id){
        recipeRepository.deleteById(id);
    }


}
