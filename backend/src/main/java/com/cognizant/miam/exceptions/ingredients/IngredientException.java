package com.cognizant.miam.exceptions.ingredients;

import com.cognizant.miam.commons.ErrorCode;
import com.cognizant.miam.exceptions.AbstractApiException;
import org.springframework.http.HttpStatus;

public class IngredientException extends AbstractApiException {
    /**
     *
     * @param message
     */
    public IngredientException(String message) {
        super(message);
    }

    /**
     *
     * @return
     */
    public ErrorCode getErrorCode(){
        return this.errorCode;
    }

    /**
     *
     * @param err
     */
    public void setErrorCode(ErrorCode err){
        this.errorCode = err;
    }

    /**
     *
     * @param httpStatus
     */
    public void setStatus(HttpStatus httpStatus){
        this.httpStatus = httpStatus;
    }

    /**
     *
     * @return
     */
    public HttpStatus getStatus(){
        return this.httpStatus;
    }
}
