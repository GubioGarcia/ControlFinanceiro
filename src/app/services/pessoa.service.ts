import { Injectable } from '@angular/core';
import { Pessoa } from '../models/Pessoa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private pessoas: Pessoa[] = [];
  private url = "http://localhost:8080/api/pessoa";

  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get<Pessoa[]>(this.url);
  }

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

