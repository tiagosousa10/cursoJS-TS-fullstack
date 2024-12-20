export class Pessoa {
  //definir o construtor
  constructor(
    //ATRIBUTOS
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}
  //METODOS
  getIdade(): number {
    return this.idade;
  }
  getCpf(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

//herança
export class Aluno extends Pessoa {
  constructor(
    //ATRIBUTOS
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    console.log('Fazer algo antes');
    const result = super.getNomeCompleto();
    return result + 'HEYYYYYYYYYYYY';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isto vem do cliente: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Tiago', 'Sousa', 23, '000.000.000-00');
const aluno = new Aluno('Tiago', 'Sousa', 23, '000.000.000-00', '0001');
const cliente = new Cliente('Tiago', 'Sousa', 23, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
