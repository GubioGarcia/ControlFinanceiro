export class Meta {
  public id: number;
  public meta: string;
  public valor: number;
  public descricao: string;

  constructor(id: number, meta: string, valor: number, descricao: string) {
    this.id = id;
    this.meta = meta;
    this.valor = valor;
    this.descricao = descricao;
  }
}
