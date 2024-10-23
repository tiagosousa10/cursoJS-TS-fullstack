//dobre os numeros
//               0  1  2  3  4  5  6  7  8
const numeros = [5,10,50,20,33,27,87,11,31];
const numerosEmDobro = numeros.map(valor=> valor * 2)
   // console.log(valor,indice,array)

//console.log(numerosEmDobro)
//                      ######################################333
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

const nomes= pessoas.map(obj=>obj.nome)
const idades = pessoas.map(obj =>  obj.idade)
/* const idades1 = pessoas.map(obj=> ({idade:obj.idade})) */
const comIds = pessoas.map(function(obj, indice){
const newObj ={...obj};
newObj.id=indice;
return newObj;
})
console.log(pessoas)
console.log(comIds)