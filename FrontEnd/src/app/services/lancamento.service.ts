import { Injectable } from '@angular/core';
import { Lancamento } from '../models/Lancamento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  private lancamentos: Lancamento[] = [];
  private url = "http://localhost:8080/api/lancamento";

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get<Lancamento[]>(this.url);
  }

  adicionarLancamento(lancamento: Lancamento): Observable<Lancamento> {
    return this.httpClient.post<Lancamento>(this.url, lancamento);
  }

  listarLancamento(): Lancamento[] {
    return this.lancamentos;
  }

  obterLancamento(id: number): Observable<Lancamento> {
    return this.httpClient.get<Lancamento>(`${this.url}/${id}`);
  }

  atualizarLancamento(id: number, lancamento: Lancamento): Observable<Lancamento> {
    return this.httpClient.put<Lancamento>(`${this.url}`, lancamento);
  }

  deletarLancamento(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
