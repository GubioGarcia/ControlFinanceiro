import { Injectable } from '@angular/core';
import { Meta } from '../models/Meta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private metas: Meta[] = [];
  private url = "http://localhost:8080/api/meta";

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get<Meta[]>(this.url);
  }

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
