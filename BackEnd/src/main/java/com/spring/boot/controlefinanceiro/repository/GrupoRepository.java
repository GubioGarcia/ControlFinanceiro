package com.spring.boot.controlefinanceiro.repository;

import com.spring.boot.controlefinanceiro.model.Grupo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GrupoRepository extends JpaRepository<Grupo, Long> {
    boolean existsByNomeAndPessoaId(String nome, Long pessoaId);
}
