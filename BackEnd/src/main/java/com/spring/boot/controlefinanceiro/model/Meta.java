package com.spring.boot.controlefinanceiro.model;
import com.spring.boot.controlefinanceiro.enums.CategoriaEnum;
import com.spring.boot.controlefinanceiro.enums.TipoLancamentoEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "SENAI_META")
public class Meta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String meta;
    private BigDecimal valor;
    private String descricao;

    @Enumerated(EnumType.STRING)
    private TipoLancamentoEnum tipo;

    @Enumerated(EnumType.STRING)
    private CategoriaEnum categoria;
}
