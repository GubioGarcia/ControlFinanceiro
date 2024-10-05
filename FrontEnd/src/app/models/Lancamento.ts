import { Data } from "@angular/router";
import { Grupo } from "./Grupo";
import { Pessoa } from "./Pessoa";

export class Lancamento {
  private static idCounter: number = 1;

  public id: number;
  public nome: string;
  public descricao: string;
  public valor: number;
  public data: Date;
  public tipo: string;
  public categoria: string;
  public grupo: Grupo;

  constructor(nome: string, descricao: string, valor: number, data: Date,
    tipo: string, categoria: string, grupo: Grupo) {
      this.id = Lancamento.idCounter++;
      this.nome = nome;
      this.descricao = descricao;
      this.valor = valor;
      this.data = data;
      this.tipo = tipo;
      this.categoria = categoria;
      this.grupo = new Grupo('','',0, new Pessoa('','',''));
  }
}
