/*
OPERADORES DE COMPARAÇao

> MAIOR 
>= maior ou igual
< menor
<= menor ou igual
== igualdade (valor)
===igualdade estrita (valor e tipo)
!= diferente (valor)
!== diferente estrito (valor e tipo)

*/


const expressaoAnd = true && true && true && true ; // basta uma ser falsa para que seja falsa
const expressaoOr = true || false ; //basta uma ser verdadeira que é verdadeiro


const usuario = 'Luiz'; //form usuario digitou
const senha = '12345'; // form usuario digitou

//                       true              false
const vaiLogarFalso = usuario ==='Luiz' && senha ==='12346';
const vaiLogarVdd = usuario ==='Luiz' && senha ==='12345' ;

console.log(vaiLogarFalso)
console.log(vaiLogarVdd)
console.log(!!true) // negar 2x o true  == true
console.log(!true) // igual a falso