package com.spring.boot.controlefinanceiro.exception;

import java.time.LocalDateTime;

public record ErrorResponse(
        String message,
        String details,
        LocalDateTime timestamp,
        int status
) {
}
