package com.spring.boot.controlefinanceiro.controller;


import com.spring.boot.controlefinanceiro.model.Meta;
import com.spring.boot.controlefinanceiro.service.MetaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/meta")
@RequiredArgsConstructor
@CrossOrigin("*")
public class MetaController {

    @Autowired
    private MetaService service;

    @GetMapping(value = "/{id}")
    public Meta findById(@PathVariable Long id) {
        return this.service.findById(id);
    }

    @GetMapping
    public List<Meta> findAll() {
        return this.service.findAll();
    }

    @PostMapping
    public Meta save(@RequestBody Meta meta) {
        return this.service.save(meta);
    }

    @PutMapping(value = "/{id}")
    public Meta update(@PathVariable Long id, @RequestBody Meta meta) {
        meta.setId(id);
        return this.service.update(meta);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Long id) {
        this.service.delete(id);
    }

}
