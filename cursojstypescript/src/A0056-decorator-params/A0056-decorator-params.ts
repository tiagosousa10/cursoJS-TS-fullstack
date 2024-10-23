function decorador(
  classProtoype: any,
  nomeMetodo: string | symbol,
  index: number,
): any {
  console.log(classProtoype);
  console.log(nomeMetodo);
  console.log(index);
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(
    @decorador nome: string,
    @decorador sobrenome: string,
    idade: number,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decorador msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();

    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Tiago', 'Sousa', 30);
const metodo = pessoa.metodo('Uma mensagem');
console.log(metodo);
