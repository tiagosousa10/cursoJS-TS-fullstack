//valores por referencia
//              0       1       2
//const nomes = ['E', 'maria', 'joana'];

/* const nomes= new Array('abc','a','cc')

nomes[2]= 'joao';
delete nomes[2];
console.log(nomes) */

/* const nomes= ['ararwara','bbbbbbbb','cccccccccccccc', 'wallace', 'rosana']
const novo = [...nomes]

const removido = nomes.pop(); //remover o ultimo elemento do array
const removido1 = nomes.shift(); //remover o 1 elemento do array
nomes.unshift('Joao') //colocar no inicio do array
nomes.push('igor') //add final array

console.log(nomes) */
//                0           1             2            3          4
const nomes= ['ararwara','bbbbbbbb','cccccccccccccc', 'wallace', 'rosana']
const novo= nomes.join(' ');// selecionar o texto 
console.log(novo)