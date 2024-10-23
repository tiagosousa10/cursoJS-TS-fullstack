/* // get e setters

const _velocidade = Symbol("_velocidade"); // gera um id aleatorio

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }
  set velocidade(valor) {
    console.log("SETTER");
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }
  get velocidade() {
    console.log("GETTER");
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] >= 100) return; // caso a _velocidade seja igual ou maior a 100 parar
    this[_velocidade]++; // caso nao esteja , a _velocidade vai aumentando
  }
  travar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const carro1 = new Carro("Fusca");

/* for (let i = 0; i <= 200; i++) {
  // teste para acelarar ate 200
  carro1.acelerar();
} */

/* console.log(carro1.velocidade);
carro1.velocidade = 99;
console.log(carro1.velocidade);
 */ 


class Pessoa{
    constructor(nome,sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome
    }
    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join();
    }
}

const p1 = new Pessoa('Tiago', 'Sousa')

p1.nomeCompleto = 'Luiz Miranda'
console.log(p1.nomeCompleto)