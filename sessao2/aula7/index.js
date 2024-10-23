//CONSTANTES

//nao se pode criar constantes com palavras reservadas
//constantes precisam de ter nomes significativos
//nao podem começar com numeros
//nao podem conter espaços ou traços
//utilizamos camelCase
//Case-sensitive
// nao podemos modificar o valor de uma constante
//nao utilize var, utilize CONST


const nome = "Joao";
console.log(nome)

const primeiroNumero = 5;
const segundoNumero = 10;
const contaMulti = primeiroNumero * segundoNumero ; // multiplicaçao
const contaAdd = primeiroNumero + segundoNumero - 3;
const contaSub = primeiroNumero - segundoNumero + 2;
const contaDiv = primeiroNumero / segundoNumero - 1;

const contaMultiAddX = contaMulti * contaAdd + 5;

console.log(contaMulti)
console.log(contaAdd)
console.log(contaSub)
console.log(contaDiv)

console.log(contaMultiAddX)


//string = Text | Number = número

//como saber o tipo da constante / variavel com typeof
console.log(typeof primeiroNumero)