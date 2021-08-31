package com.cognizant.miam.commons;

public enum ErrorCode {
   INGREDIENT_ALREADY_EXISTS(0),
   INGREDIENT_BAD_IMAGE_TYPE(1),
   RECIPE_PEOPLE_NUMBER_INVALID(2);


    private final int value;

    ErrorCode(int value) {
        this.value = value;
    }
}
