import { Injectable } from '@angular/core';
import { Lancamento } from '../models/Lancamento';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {
  private lancamentos: Lancamento[] = [];

  constructor() { }

  adicionarLancamento(lancamento: Lancamento): void {
    this.lancamentos.push(lancamento);
  }

  listarLancamento(): Lancamento[] {
    return this.lancamentos;
  }

  obterLancamento(id: number): Lancamento | undefined {
    return this.lancamentos.find(lancamento => lancamento.id === id);
  }
}
