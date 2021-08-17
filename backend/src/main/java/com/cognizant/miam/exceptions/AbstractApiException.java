package com.cognizant.miam.exceptions;

import com.cognizant.miam.commons.ErrorCode;
import org.springframework.http.HttpStatus;

public abstract class AbstractApiException extends RuntimeException {
    protected ErrorCode errorCode;
    protected HttpStatus httpStatus;

    /**
     *
     * @param message
     */
    public AbstractApiException(String message) {
        super(message);
    }
}
