import { Injectable } from '@angular/core';
import { Meta } from '../models/Meta';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private metas: Meta[] = [];

  constructor() { }

  adicionarMeta(meta: Meta): void {
    this.metas.push(meta);
  }

  listarMeta(): Meta[] {
    return this.metas;
  }

  obterMeta(id: number): Meta | undefined {
    return this.metas.find(meta => meta.id === id);
  }
}
