package com.cognizant.miam.commons;

public enum ErrorCode {
   INGREDIENT_ALREADY_EXISTS(0),
   INGREDIENT_BAD_IMAGE_TYPE(1);

   private final int value;

    ErrorCode(int value) {
        this.value = value;
    }
}
