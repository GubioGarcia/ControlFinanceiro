package com.spring.boot.controlefinanceiro.exception.custom;


public final class NotFoundException extends ApplicationException {

    public NotFoundException(String message) {
        super(message);
    }

    public NotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
