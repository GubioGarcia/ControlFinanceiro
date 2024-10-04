package com.spring.boot.controlefinanceiro.service;

import com.spring.boot.controlefinanceiro.dto.LancamentoFilterDTO;
import com.spring.boot.controlefinanceiro.exception.custom.NotFoundException;
import com.spring.boot.controlefinanceiro.exception.custom.RegraNegocioException;
import com.spring.boot.controlefinanceiro.model.Lancamento;
import com.spring.boot.controlefinanceiro.repository.LancamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LancamentoService {

    private LancamentoRepository repository;

    @Autowired
    public LancamentoService(LancamentoRepository repository) {
        this.repository = repository;
    }

    public Lancamento findById(Long id) {
        return this.repository.findById(id).orElseThrow(() -> new NotFoundException("Lancamento não encontrada"));
    }

    public List<Lancamento> findAll() {
        return this.repository.findAll();
    }

    public Lancamento save(Lancamento lancamento) {
        return this.repository.save(lancamento);
    }

    public Lancamento update(Lancamento lancamentoAtualizado) {
        Lancamento lancamentoExistente = findById(lancamentoAtualizado.getId());

        if (!grupoValido(lancamentoAtualizado)) {
            throw new RegraNegocioException("Grupo ou categoria inválidos.");
        }

        if (!saldoSuficiente(lancamentoAtualizado)) {
            throw new RegraNegocioException("Saldo insuficiente no grupo.");
        }

        if (saldoFicaraNegativo(lancamentoAtualizado)) {
            // Permitir a operação mas informar sobre saldo negativo
            System.out.println("Alerta: O saldo do grupo ficará negativo após essa operação.");
        }

        lancamentoExistente.setValor(lancamentoAtualizado.getValor());
        lancamentoExistente.setCategoria(lancamentoAtualizado.getCategoria());
        // Atualizar outros atributos conforme necessário
        return repository.save(lancamentoExistente);
    }

    public void delete(Long id) {
        this.repository.deleteById(id);
    }

    public List<Lancamento> filter(LancamentoFilterDTO filterDTO) {
        return this.repository.findByFilters(filterDTO.nome(),
                filterDTO.tipo(),
                filterDTO.data(),
                filterDTO.categoria());
    }

    private boolean grupoValido(Lancamento lancamento) {
        // Validação da associação ao grupo e categoria
        return lancamento.getGrupo() != null && lancamento.getCategoria() != null;
    }

    private boolean saldoSuficiente(Lancamento lancamento) {
        // Lógica para verificar saldo do grupo
        return lancamento.getGrupo().getSaldo().doubleValue() >= lancamento.getValor().doubleValue();
    }

    private boolean saldoFicaraNegativo(Lancamento lancamento) {
        // Verifica se o saldo ficará negativo após a edição
        return lancamento.getGrupo().getSaldo().doubleValue() - lancamento.getValor().doubleValue() < 0;
    }
}
