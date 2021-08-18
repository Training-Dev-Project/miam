package com.cognizant.miam.commons;

public enum ErrorCode {
   INGREDIENT_ALREADY_EXISTS(0);

   private final int value;

    ErrorCode(int value) {
        this.value = value;
    }
}
