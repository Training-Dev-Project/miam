package com.cognizant.miam.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
public class IngredientDTO {
  @Override
  public String toString() {
    return "IngredientDTO [name=" + name + "]";
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
  private long id;
  private String name;
}
