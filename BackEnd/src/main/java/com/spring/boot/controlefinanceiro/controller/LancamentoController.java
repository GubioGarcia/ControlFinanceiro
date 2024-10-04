package com.spring.boot.controlefinanceiro.controller;


import com.spring.boot.controlefinanceiro.dto.LancamentoFilterDTO;
import com.spring.boot.controlefinanceiro.model.Lancamento;
import com.spring.boot.controlefinanceiro.service.LancamentoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/lancamento")
@RequiredArgsConstructor
@CrossOrigin("*")
public class LancamentoController {

    @Autowired
    private LancamentoService service;

    @GetMapping(value = "/{id}")
    public Lancamento findById(@PathVariable Long id) {
        return this.service.findById(id);
    }

    @GetMapping
    public List<Lancamento> findAll() {
        return this.service.findAll();
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> save(@RequestBody Lancamento lancamento) {
        Map<String, Object> response = new HashMap<>();
        response.put("mensagem", "Lançamento realizado com sucesso.");
        response.put("lancamento", this.service.save(lancamento));
        return ResponseEntity
                .ok(response);
    }

    @PutMapping
    public Lancamento update(@RequestBody Lancamento lancamento) {
        return this.service.update(lancamento);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(Long id) {
        this.service.delete(id);
    }

    @PostMapping(value = "/filter")
    public List<Lancamento> filter(@RequestBody LancamentoFilterDTO lancamento) {
        return this.service.filter(lancamento);
    }


}
