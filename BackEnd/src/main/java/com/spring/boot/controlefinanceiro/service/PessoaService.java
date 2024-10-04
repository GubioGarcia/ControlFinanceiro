package com.spring.boot.controlefinanceiro.service;

import com.spring.boot.controlefinanceiro.exception.custom.NotFoundException;
import com.spring.boot.controlefinanceiro.exception.custom.RegraNegocioException;
import com.spring.boot.controlefinanceiro.model.Pessoa;
import com.spring.boot.controlefinanceiro.repository.PessoaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PessoaService {

    private final PessoaRepository repository;

    public Pessoa findById(Long id) {
        return this.repository.findById(id).orElseThrow(() -> new NotFoundException("Pessoa não encontrada"));
    }

    public List<Pessoa> findAll() {
        return this.repository.findAll();
    }

    public Pessoa save(Pessoa pessoa) {
        if (repository.existsByNome(pessoa.getNome())) {
            throw new RegraNegocioException("Nome já cadastrado no sistema.");
        }
        return repository.save(pessoa);
    }

    public Pessoa update(Pessoa pessoa) {
        Pessoa pessoaExistente = findById(pessoa.getId());
        if (!pessoaExistente.getNome().equals(pessoa.getNome()) && repository.existsByNome(pessoa.getNome())) {
            throw new RegraNegocioException("Nome já cadastrado no sistema.");
        }
        pessoaExistente.setNome(pessoa.getNome());
        return this.repository.save(pessoa);
        //return this.repository.save(pessoa);
    }

    public void delete(Long id) {
        if (!repository.existsById(id)) {
            throw new NotFoundException("Pessoa não encontrada");
        }
        try {
            this.repository.deleteById(id);
        } catch (Exception e) {
            throw new RegraNegocioException("Erro ao tentar excluir a pessoa. Verifique se há registros associados.");
        }
    }
}
