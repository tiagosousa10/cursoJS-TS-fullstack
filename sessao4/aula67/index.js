//reduce -somar todos os valores
//retornar array com numeros pares
//retorne um array com o dobro dos valores

 /* onst numeros = [1, 2, 3, 4, 6, 77, 88, 55, 44, 33, 22];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
  if(valor % 2=== 0) acumulador.push(valor) //divisel por 2 , resto 0
  
  return acumulador;
}, []); // 0 é o valor inicial do acumulador
console.log(total);
 */
/* const numeros = [1, 2, 3, 4, 6, 77, 88, 55, 44, 33, 22];
const total = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 !== 0) {
    //numeros impares
    acumulador += valor;
  }
  console.log(acumulador);
  return acumulador;
}, 0); // 0 é o valor inicial do acumulador
console.log(total);
 */

const pessoas = [
    {nome: 'Luiz', idade: 61},
    {nome: 'Tiago', idade: 26},
    {nome: 'Joao', idade: 13},
    {nome: 'Francisco', idade: 68},
    {nome: 'Wallace', idade: 56},
    {nome: 'Rosana', idade: 33},
    {nome: 'Maria', idade: 22},
    {nome: 'Andre', idade: 12}
]

//retornar o mais velho
const maisVelha = pessoas.reduce(function(acumulador,valor){
   if(acumulador.idade > valor.idade) return acumulador;
   return valor;
})
console.log(maisVelha)