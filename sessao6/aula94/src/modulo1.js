// default = padrao
 // determinar o que exportar ! (export)
const nome = "Luiz";
 const sobrenome = "Miranda";
 const idade = 30;

const cpf = 'asdf' // não é exportado

export function soma(x, y) { // utilizaçao do default
  return x + y;
}

export {nome, sobrenome, idade}

export class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome
    }
}
