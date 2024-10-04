export class Pessoa {
  private static idCounter: number = 1;

  public id: number;
  public nome: string;
  public email: string;
  public cpf: string;

  constructor(nome: string, email: string, cpf: string) {
    this.id = Pessoa.idCounter++;
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
  }
}
