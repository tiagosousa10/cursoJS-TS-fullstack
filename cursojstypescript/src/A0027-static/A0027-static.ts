export class Pessoa {
  //atributos estaticos
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    //ATRIBUTOS
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  //metodos estaticos
  /* static falaOi(): void {
    console.log('OI');
  } */

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Tiago', 'Teste', 30, '123.065.990-03');
const pessoa2 = Pessoa.criaPessoa('Joana', 'QlqCoisa');

console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);

//Pessoa.falaOi(); // para aceder ao metodo estatico tem que ser atraves da CLASSE
