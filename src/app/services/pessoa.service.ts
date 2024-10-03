import { Injectable } from '@angular/core';
import { Pessoa } from '../models/Pessoa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

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

  adicionarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.httpClient.post<Pessoa>(this.url, pessoa);
  }

  listarPessoas(): Pessoa[] {
    return this.pessoas;
  }

  obterPessoa(id: number): Pessoa | undefined {
    return this.pessoas.find(pessoa => pessoa.id === id);
  }

  atualizarPessoa(id: number, pessoa: Pessoa) {
    return this.httpClient.put<Pessoa>(this.url, pessoa);
  }

  deletePessoa(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}

