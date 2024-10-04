import { Injectable } from '@angular/core';
import { Meta } from '../models/Meta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

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

  adicionarMeta(meta: Meta): Observable<Meta> {
    return this.httpClient.post<Meta>(this.url, meta);
  }

  listarMeta(): Meta[] {
    return this.metas;
  }

  obterMeta(id: number): Meta | undefined {
    return this.metas.find(meta => meta.id === id);
  }

  atualizarMeta(id: number, meta: Meta): Observable<Meta> {
    return this.httpClient.put<Meta>(`${this.url}/${id}`, meta);
  }

  deleteMeta(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
