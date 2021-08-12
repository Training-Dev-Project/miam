package com.cognizant.miam.models;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.CascadeType;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Recipe {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  
  @NotNull
  @NotBlank
  private String name;
  
  @OneToMany(cascade = CascadeType.ALL,mappedBy="recipe")
  private Set<RecipeIngredient> recipeIngredientList = new HashSet<>();

  @NotNull
  @NotBlank
  private String instructions;

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

  public Set<RecipeIngredient> getRecipeIngredientList() {
    return recipeIngredientList;
  }

  public void setRecipeIngredientList(Set<RecipeIngredient> recipeIngredientList) {
    this.recipeIngredientList = recipeIngredientList;
  }

  public String getInstructions() {
    return instructions;
  }

  public void setInstructions(String instructions) {
    this.instructions = instructions;
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

    public Builder set(long id) {
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

    public Recipe build() {
      Recipe recipe = new Recipe();
      recipe.setId(this.id);
      recipe.setName(this.name);
      recipe.setInstructions(this.instructions);
      return recipe;
    }
  }
}
