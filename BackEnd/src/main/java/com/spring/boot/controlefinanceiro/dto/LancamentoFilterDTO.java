package com.spring.boot.controlefinanceiro.dto;

import com.spring.boot.controlefinanceiro.enums.CategoriaEnum;
import com.spring.boot.controlefinanceiro.enums.TipoLancamentoEnum;

import java.time.LocalDate;

public record LancamentoFilterDTO(String nome,
                                  LocalDate data,
                                  TipoLancamentoEnum tipo,
                                  CategoriaEnum categoria) {
}
