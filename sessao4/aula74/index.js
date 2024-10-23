//construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => " Original " + this.nome + " " + this.sobrenome;
}

Pessoa.prototype === pessoa1.__proto__;

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

//instancia
const pessoa1 = new Pessoa("Tiago", "Sousa");
const data = new Date();

console.log(data, pessoa1);
