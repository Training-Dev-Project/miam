package com.cognizant.miam.exceptions;

import com.cognizant.miam.commons.ErrorCode;

import java.util.Date;

public class ErrorMessage {
    private Date timestamp;
    private String message;
    private ErrorCode code;

    /**
     *
     * @param timestamp
     * @param message
     * @param codeError
     */
    public ErrorMessage(Date timestamp, String message, ErrorCode codeError) {
        this.timestamp = timestamp;
        this.message = message;
        this.code = codeError;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public ErrorCode getCode() {
        return code;
    }

    public void setCode(ErrorCode code) {
        this.code = code;
    }
}
