function semRetorno(...args: string[]): void {
  console.log(args.join(''));
}
const pessoa = {
  nome: 'Tiago',
  sobrenome: 'Sousa',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();
semRetorno('Tiago', 'Sousa');

export { pessoa };
