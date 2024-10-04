export class Lancamento {
  private static idCounter: number = 1;

  public id: number;
  public nome: string;
  public descricao: string;
  public valor: number;
  public data: string;

  constructor(nome: string, descricao: string, valor: number, data: string) {
    this.id = Lancamento.idCounter++;
    this.nome = nome;
    this.descricao = descricao;
    this.valor = valor;
    this.data = data;
  }
}
