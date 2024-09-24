import { Injectable } from '@angular/core';
import { Grupo } from '../models/Grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private grupos: Grupo[] = [];

  constructor() { }

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
