package com.spring.boot.controlefinanceiro.repository;

import com.spring.boot.controlefinanceiro.model.Meta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MetaRepository extends JpaRepository<Meta, Long> {
}
