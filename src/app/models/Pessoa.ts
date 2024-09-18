export class Pessoa {
  public id: number;
  public nome: string;
  public email: string;
  public cpf: string;

  constructor(id: number, nome: string, email: string, cpf: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
  }
}
