package com.spring.boot.controlefinanceiro.exception.custom;

public sealed class ApplicationException extends RuntimeException
        permits NotFoundException, RegraNegocioException {

    public ApplicationException(String message) {
        super(message);
    }

    public ApplicationException(String message, Throwable cause) {
        super(message, cause);
    }
}
