export class Grupo {
  public id: number;
  public nome: string;
  public descricao: string;
  public saldo: number;

  constructor(id: number, nome: string, descricao: string, saldo: number) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.saldo = saldo;
  }
}
