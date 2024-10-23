export class Pessoa {
  constructor(
    //ATRIBUTOS
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf; // setter de forma mais rapida
  }

  //METODOS
  //getter e setters na nova versão de sintaxe comportam-se como ATRIBUTOS

  //setter
  set cpf(cpf: string) {
    console.log('SETTER chamado');
    this._cpf = cpf;
  }

  //getter
  get cpf(): string {
    console.log('GETTER chamado');

    return this._cpf.replace(/\D/g, ''); // ExpReg para retirar os caracteres do cpf(. & -)
  }
}

const pessoa = new Pessoa('Tiago', 'Teste', 30, '123.065.990-03');
pessoa.cpf = '133.321.678-23'; // para acessar ao setter (=)
console.log(pessoa.cpf); //para chamar o getter
