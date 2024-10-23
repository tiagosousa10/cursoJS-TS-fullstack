// Factory Function ( funçao Fabrica)
//Constructor Function
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome} `;
    },

    // Setter

    set nomeCompleto(valor) {
      valor = valor.split("");
      this.nome = valor.shift();
      this.sobrenome = valor.join();
      console.log(valor);
    },

    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${assunto}.`;
    },

    altura: a,
    peso: p,
    // getter
    get imc() {
      const indice = this.peso / this.altura ** 2; // calcular imc
      return indice.toFixed(2); // duas casas decimais
    },
  };
}
const p1 = criaPessoa("Luiz", "Otavio", 1.8, 80);
const p2 = criaPessoa("Ronaldo", "Moura", 1.8, 60);
const p3 = criaPessoa("Andre", "Otavio", 1.3, 80);


console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)