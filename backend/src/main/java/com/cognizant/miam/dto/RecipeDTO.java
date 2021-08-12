package com.cognizant.miam.dto;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Map;

@NoArgsConstructor
@AllArgsConstructor
public class RecipeDTO {

    private long id;

    private String name;
    private String instructions;
    private Map<Long, Double> ingredients;

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

    @Override
    public String toString() {
        return "RecipeDTO{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", instructions='" + instructions + '\'' +
                ", ingredients=" + ingredients +
                '}';
    }

    public static class Builder {
        private long id;
        private String name;
        private String instructions;

        private Builder() {
        }

        public static Builder newInstance() {
            return new Builder();
        }

        public Builder setId(long id) {
            this.id = id;
            return this;
        }

        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder setInstructions(String instructions) {
            this.instructions = instructions;
            return this;
        }

        public RecipeDTO build() {
            RecipeDTO recipe = new RecipeDTO();
            recipe.setId(this.id);
            recipe.setName(this.name);
            recipe.setInstructions(this.instructions);
            return recipe;
        }
    }
}
