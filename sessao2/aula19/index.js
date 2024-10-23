/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores Copiados

Referencia (mutavel) - Arrays, Objetos, Functions - Passados por referencia
*/

/*let a = [1,2,3];
let b = a;

console.log(a,b)

a.push(4);
console.log(a,b)

b.pop(4);
console.log(a,b) */

const a = {
    nome: 'Tiago',
    sobrenome: 'Sousa',
};
const b = {...a};

a.nome = 'Joao';
console.log(b, a);