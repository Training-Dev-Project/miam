package com.cognizant.miam.exceptions;

import com.cognizant.miam.exceptions.ingredients.IngredientException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Date;

@ControllerAdvice
public class RestExceptionHandler {
    /**
     *
     * @param ex
     * @return
     */
    @ExceptionHandler(IngredientException.class)
    protected ResponseEntity<Object> emptyDateResult(IngredientException ex) {
        ErrorMessage errorMessage =new ErrorMessage(new Date(), ex.getMessage(), ex.getErrorCode());
        return new ResponseEntity<>(errorMessage, ex.getStatus());
    }
}
