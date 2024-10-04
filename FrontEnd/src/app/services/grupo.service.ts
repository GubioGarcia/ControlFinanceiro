import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupo } from '../models/Grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private grupos: Grupo[] = [];
  private url = "http://localhost:8080/api/grupo";

  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get<Grupo[]>(this.url);
  }

  adicionarGrupo(grupo: Grupo): Observable<Grupo> {
    return this.httpClient.post<Grupo>(this.url, grupo);
  }

  obterGrupo(id: number): Observable<Grupo> {
    return this.httpClient.get<Grupo>(`${this.url}/${id}`);
  }

  atualizarGrupo(id: number, grupo: Grupo): Observable<Grupo> {
    return this.httpClient.put<Grupo>(`${this.url}`, grupo);
  }

  deletarGrupo(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
