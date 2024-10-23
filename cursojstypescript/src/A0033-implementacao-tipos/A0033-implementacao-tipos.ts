type TipoNome = {
  // nao pode ter modificadores(public,private,protected)
  nome: string; //apenas "parametros"
};
type TipoSobrenome = {
  sobrenome: string;
};
type TipoNomeCompleto = {
  nomeCompleto: () => string;
};
//protected -> pode ser acessado -> classe Filho -> da Principal
//public -> pode ser acessado -> de qualquer lugar
//private -> apenas na classe

//por ser um "type" -> implements(!extends)
export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  public nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Tiago', 'Sousa');
console.log(pessoa.nomeCompleto());
