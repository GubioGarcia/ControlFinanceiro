import { Pessoa } from "./Pessoa";

export class Grupo {
  private static idCounter: number = 1;

  public id: number;
  public nome: string;
  public descricao: string;
  public saldo: number;
  public pessoa: Pessoa = new Pessoa('', '', '')

  constructor(nome: string, descricao: string, saldo: number, pessoa: Pessoa) {
    this.id = Grupo.idCounter++;
    this.nome = nome;
    this.descricao = descricao;
    this.saldo = saldo;
    this.pessoa = pessoa;
  }
}
