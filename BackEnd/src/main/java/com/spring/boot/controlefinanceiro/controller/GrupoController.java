package com.spring.boot.controlefinanceiro.controller;


import com.spring.boot.controlefinanceiro.model.Grupo;
import com.spring.boot.controlefinanceiro.service.GrupoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/grupo")
@RequiredArgsConstructor
@CrossOrigin("*")
public class GrupoController {

    @Autowired
    private GrupoService service;

    @GetMapping(value = "/{id}")
    public Grupo findById(@PathVariable Long id) {
        return this.service.findById(id);
    }

    @GetMapping
    public List<Grupo> findAll() {
        return this.service.findAll();
    }

    @PostMapping
    public Grupo save(@RequestBody Grupo grupo) {
        return this.service.save(grupo);
    }

    @PutMapping
    public Grupo update(@RequestBody Grupo grupo) {
        return this.service.update(grupo);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(Long id) {
        this.service.delete(id);
    }

}
