export class Meta {
  private static idCounter: number = 1;

  public id: number;
  public meta: string;
  public valor: number;
  public descricao: string;

  constructor(meta: string, valor: number, descricao: string) {
    this.id = Meta.idCounter++;
    this.meta = meta;
    this.valor = valor;
    this.descricao = descricao;
  }
}
