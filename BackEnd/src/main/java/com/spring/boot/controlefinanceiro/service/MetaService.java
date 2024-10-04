package com.spring.boot.controlefinanceiro.service;

import com.spring.boot.controlefinanceiro.exception.custom.NotFoundException;
import com.spring.boot.controlefinanceiro.exception.custom.RegraNegocioException;
import com.spring.boot.controlefinanceiro.model.Meta;
import com.spring.boot.controlefinanceiro.repository.MetaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MetaService {

    private MetaRepository repository;

    @Autowired
    public MetaService(MetaRepository repository) {
        this.repository = repository;
    }

    public Meta findById(Long id) {
        return this.repository.findById(id).orElseThrow(() -> new NotFoundException("Meta não encontrada"));
    }

    public List<Meta> findAll() {
        return this.repository.findAll();
    }

    public Meta save(Meta meta) {
        if (meta.getDescricao() == null || meta.getDescricao().isEmpty()) {
            throw new RegraNegocioException("A descrição da meta é obrigatória.");
        }
        if (meta.getValor().doubleValue() <= 0) {
            throw new RegraNegocioException("O valor da meta deve ser positivo.");
        }
        return repository.save(meta);
    }

    public Meta update(Meta metaAtualizada) {
        Meta metaExistente = findById(metaAtualizada.getId());
        if (metaAtualizada.getDescricao() == null || metaAtualizada.getDescricao().isEmpty()) {
            throw new RegraNegocioException("A descrição da meta é obrigatória.");
        }
        if (metaAtualizada.getValor().doubleValue() <= 0) {
            throw new RegraNegocioException("O valor da meta deve ser positivo.");
        }
        metaExistente.setDescricao(metaAtualizada.getDescricao());
        metaExistente.setValor(metaAtualizada.getValor());
        return repository.save(metaExistente);
    }

    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new NotFoundException("Meta não encontrada");
        }
        try {
            this.repository.deleteById(id);
        } catch (Exception e) {
            throw new RegraNegocioException("Erro ao tentar excluir a meta. Verifique se há registros associados.");
        }
    }
}
