package com.spring.boot.controlefinanceiro.exception.custom;


public final class RegraNegocioException extends ApplicationException {

    public RegraNegocioException(String message) {
        super(message);
    }

    public RegraNegocioException(String message, Throwable cause) {
        super(message, cause);
    }
}
