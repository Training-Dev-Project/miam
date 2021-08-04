package com.cognizant.miam.dto;



import java.util.Map;
import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class RecipeDTO {

  private long id;
  
  private String name;
  private String instructions;
  private Map<Long,Double> ingredients;

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public Map<Long, Double> getIngredients() {
        return ingredients;
    }

    public void setIngredients(Map<Long, Double> ingredients) {
        this.ingredients = ingredients;
    }
}
