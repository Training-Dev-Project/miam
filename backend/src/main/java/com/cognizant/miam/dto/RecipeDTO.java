package com.cognizant.miam.dto;

import com.cognizant.miam.models.RecipeIngredient;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class RecipeDTO {

  private long id;
  
  private String name;
  
  private List<RecipeIngredient> recipeIngredientList;

  private String instructions;

    /**
     * @return long return the id
     */
    public long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * @return String return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return List<RecipeIngredient> return the recipeIngredientList
     */
    public List<RecipeIngredient> getRecipeIngredientList() {
        return recipeIngredientList;
    }

    /**
     * @param recipeIngredientList the recipeIngredientList to set
     */
    public void setRecipeIngredientList(List<RecipeIngredient> recipeIngredientList) {
        this.recipeIngredientList = recipeIngredientList;
    }

    /**
     * @return String return the instructions
     */
    public String getInstructions() {
        return instructions;
    }

    /**
     * @param instructions the instructions to set
     */
    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

}
