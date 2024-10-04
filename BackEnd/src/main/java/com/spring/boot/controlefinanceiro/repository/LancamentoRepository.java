package com.spring.boot.controlefinanceiro.repository;

import com.spring.boot.controlefinanceiro.enums.CategoriaEnum;
import com.spring.boot.controlefinanceiro.enums.TipoLancamentoEnum;
import com.spring.boot.controlefinanceiro.model.Lancamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface LancamentoRepository extends JpaRepository<Lancamento, Long> {
    @Query("SELECT l FROM Lancamento l " +
            "WHERE (:nome IS NULL OR l.nome LIKE %:nome%) " +
            "AND (:tipo IS NULL OR l.tipo = :tipo) " +
            "AND (:data IS NULL OR l.data = :data) " +
            "AND (:categoria IS NULL OR l.categoria = :categoria)")
    List<Lancamento> findByFilters(
            @Param("nome") String nome,
            @Param("tipo") TipoLancamentoEnum tipo,
            @Param("data") LocalDate data,
            @Param("categoria") CategoriaEnum categoria);
}
