import { Injectable } from '@angular/core';

import { Pessoa } from '../models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private pessoas: Pessoa[] = [];

  constructor() {}

  adicionarPessoa(pessoa: Pessoa): void {
    this.pessoas.push(pessoa);
  }

  listarPessoas(): Pessoa[] {
    return this.pessoas;
  }

  obterPessoa(id: number): Pessoa | undefined {
    return this.pessoas.find(pessoa => pessoa.id === id);
  }
}

