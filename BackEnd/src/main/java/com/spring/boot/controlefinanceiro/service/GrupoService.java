package com.spring.boot.controlefinanceiro.service;

import com.spring.boot.controlefinanceiro.exception.custom.NotFoundException;
import com.spring.boot.controlefinanceiro.exception.custom.RegraNegocioException;
import com.spring.boot.controlefinanceiro.model.Grupo;
import com.spring.boot.controlefinanceiro.repository.GrupoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GrupoService {

    private GrupoRepository repository;

    public GrupoService(GrupoRepository repository) {
        this.repository = repository;
    }

    public Grupo findById(Long id) {
        return this.repository.findById(id).orElseThrow(() -> new NotFoundException("Grupo não encontrada"));
    }

    public List<Grupo> findAll() {
        return this.repository.findAll();
    }

    public Grupo save(Grupo grupo) {
        if (repository.existsByNomeAndPessoaId(grupo.getNome(), grupo.getPessoa().getId())) {
            throw new RegraNegocioException("Nome do grupo já existe para esta pessoa.");
        }
        return repository.save(grupo);
    }

    public Grupo update(Grupo grupoAtualizado) {
        Grupo grupoExistente = findById(grupoAtualizado.getId());
        if (!grupoExistente.getNome().equals(grupoAtualizado.getNome()) && repository.existsByNomeAndPessoaId(grupoAtualizado.getNome(), grupoAtualizado.getPessoa().getId())) {
            throw new RegraNegocioException("Nome do grupo já existe para esta pessoa.");
        }
        grupoExistente.setNome(grupoAtualizado.getNome());
        // Atualizar outros atributos conforme necessário
        return repository.save(grupoExistente);
    }

    public void delete(Long id) {
        this.repository.deleteById(id);
    }
}
