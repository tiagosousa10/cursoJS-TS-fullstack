interface Pessoa {
  nome: string;
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
  idade?: number; //number ou undefined
}
export const pessoa: Pessoa = {
  nome: 'Tiago',
  sobrenome: 'Teste',
  enderecos: ['Avenida Brasil'],
  idade: 30,
};

pessoa.idade = 31;
console.log(pessoa);
