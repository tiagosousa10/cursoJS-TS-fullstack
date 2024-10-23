// Função Construtora -> objetos
// Função fabrica -> objetos
// construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {

  //atributos ou metodos privados
  const ID = 123456;
  const metodoInterno = function () {};

  //Atributos ou metodos publicos devido ao this.
  (this.nome = nome), (this.sobrenome = sobrenome);

  this.metodo = function () {
    console.log(this.nome + " Sou um Método");
  };
}

//metodo construtor , new ...
const p1 = new Pessoa("Luiz", "Otavio");
const p2 = new Pessoa("Susana", "Oliveira");

console.log(p1.nome);

p1.metodo();

