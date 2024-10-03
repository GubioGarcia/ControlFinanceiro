import { Injectable } from '@angular/core';
import { Grupo } from '../models/Grupo';
import { HttpClient } from '@angular/common/http';

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

  adicionarGrupo(grupo: Grupo): void {
    this.grupos.push(grupo);
  }

  listarGrupo(): Grupo[] {
    return this.grupos;
  }

  obterGrupo(id: number): Grupo | undefined {
    return this.grupos.find(grupo => grupo.id === id);
  }
}
