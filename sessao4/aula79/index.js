//          factory functions + prototypes
const falar = {
  falar() {
    console.log(`${this.nome} esta falando`);
  },
};
const comer = {
  comer() {
    console.log(`${this.nome} esta comendo`);
  },
};
const beber = {
  beber() {
    console.log(`${this.nome} esta bebendo`);
  },
};

const pessoaPrototype = Object.assign({}, falar, comer,beber)

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("Tiago", "Sousa");
const p2 = criaPessoa("Maria", "Sousa");
console.log(p1.falar());
