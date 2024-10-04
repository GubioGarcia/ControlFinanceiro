package com.spring.boot.controlefinanceiro.repository;

import com.spring.boot.controlefinanceiro.model.Pessoa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
    boolean existsByNome(String nome);
}
