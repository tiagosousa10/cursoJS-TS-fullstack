class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`${this.nome} está a falar`);
  }
}



function Pessoa2(nome,sobrenome){
    this.nome=nome;
    this.sobrenome= sobrenome
}


Pessoa2.prototype.falar = function(){
     console.log(`${this.nome} esta falando`)
}

const p1 = new Pessoa("tiago", "sousa");

