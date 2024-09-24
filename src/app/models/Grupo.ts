export class Grupo {
  private static idCounter: number = 1;

  public id: number;
  public nome: string;
  public descricao: string;
  public saldo: number;

  constructor(nome: string, descricao: string, saldo: number) {
    this.id = Grupo.idCounter++;
    this.nome = nome;
    this.descricao = descricao;
    this.saldo = saldo;
  }
}
