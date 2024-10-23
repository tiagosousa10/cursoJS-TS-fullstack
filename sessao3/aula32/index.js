/* 
let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b ,c ,a];
[a , b , c] = letras;



console.log(a,b,c);
*/
//               0,1,2,3,4,5,6,7,8   
//const numeros = [1,2,3,4,5,6,7,8,9]
//const primeiroNumero = numeros[0];
//console.log(numeros[0])
//                 0    1     2    3    4    5    6    7   8
/*
const numeros = [1000, 2000,3000,4000,5000,6000,7000,8000,9000];
//          0               1
const [um,,tres,,cinco,,sete] = numeros
// ...rest, ...spread
console.log(um,tres,cinco)
//console.log(resto);




*/
//                  0         1       2
//                0 1 2    0 1 2    0 1 2
const numeros = [[1,2,3], [4,5,6], [7,8,9]];

console.log(numeros[1][2]); // que é o numero 6
//const [,[,,seis]] = numeros //mais complexo
const [lista1,lista2,lista3] = numeros

console.log(lista3[2]) // numero 9

