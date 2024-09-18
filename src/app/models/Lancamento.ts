export class Lancamento {
  public id: number;
  public nome: string;
  public descricao: string;
  public valor: number;
  public data: string;

  constructor(id: number, nome: string, descricao: string, valor: number, data: string) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.valor = valor;
    this.data = data;
  }
}
