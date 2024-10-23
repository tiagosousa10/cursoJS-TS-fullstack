//filter, map, reduce
//FILTER vai sempre retorna um array com a mesma quantidade ou menos.
//
//retorne os numeros maiores que 10
//               0  1  2  3  4 5 6 7 8 9 ...
//const numeros = [5,10,51,23,45,1,2,3,4,5,6]

//funcao de callback
/* function callbackFilter(valor,indice,array){

if(valor > 10 ){ //transformar em booleano
 return valor > 10;   
}
} */
//               0  1  2  3  4 5 6 7 8 9 ...
const numeros = [5,10,51,23,45,1,2,3,4,5,6]
const numerosFiltrados= numeros.filter(valor => valor > 10
)
console.log(numerosFiltrados)

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
//                          pessoas com nome maior ou igual a 6 letras
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6)
console.log(pessoasComNomeGrande)
//              pessoas com mais de 50 anos
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50)
//              nome que termina com letra a
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a')
)