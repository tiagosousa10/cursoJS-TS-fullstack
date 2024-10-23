/*
&& -> false && true -> false 'o valor mesmo' 
|| -> true && false -> vai retornar o valor verdadeiro
false
*/

//
console.log('Luiz Otavio' && 0 && 'Maria') ; // retorna 0
console.log('Luiz Otavio' && true && 'Maria') ; // retorna a ultima
console.log('Luiz Otavio' && 0 && NaN) ; //retorna NaN



function falaOi(){
    return 'oi'
}


const vaiExecutar = false;

console.log(vaiExecutar && falaOi()); //falso e verdade = falso

let vaiExecutar1 ; // undefined , nao pode ser constante pois nao tem valor atribuido
console.log(vaiExecutar1)
//                                     1
console.log(0 || false || null || 'Luiz Otavio' || true) // o OR precisa de apenas uma expressao verdadeira para retornar o valor verdadeiro

const corUsuario = null ;
corExemplo = 'azul';
//                  null         retorno    
const corPadrao = corUsuario || corExemplo || 'preto';

console.log(corPadrao);

const a = 0;
const b = null ;
const c = false;
const d= false ;
const e = NaN ;
//                           retorno    = NaN, mas caso tenha uma expressao vdd , o retorno será esse.
console.log(a || b || c || d || e);