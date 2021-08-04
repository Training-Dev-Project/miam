package com.cognizant.miam.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Ingredient {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  @NotNull
  @NotBlank
  private String name;

  @OneToMany(mappedBy= "ingredient")
  private Set<RecipeIngredient> recipes = new HashSet<>();


  @Override
  public String toString() {
    return "Ingredient [name=" + name + "]";
  }
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

  public Set<RecipeIngredient> getRecipes() {
    return recipes;
  }

  public void setRecipes(Set<RecipeIngredient> recipes) {
    this.recipes = recipes;
  }
}
