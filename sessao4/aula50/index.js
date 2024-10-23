
//arguments = sustentam todos os argumentos enviados !
/* function funcao(a,b,c,d,e,f) {
    let total = 0;

    for(let argumento of arguments){
        total += argumento;
    }
    console.log(total,a,b,c)
}
funcao(6,1,2,3,4,5);
 */

/* function funcao(a,b = 2, c=4){
   // b = b || 0; // verificar b
    console.log(a + b + c);

}

funcao(2, undefined, 20) //undefined assume o a valor atribuido na funçao(nesta caso b = 2) */


/* function funcao({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade)
}
let objeto={nome:'Tiago', sobrenome: 'Sousa', idade: 20}

funcao(objeto)

function fnc([valor1,valor2,valor3]){
    console.log(valor1, valor2,valor3)
}

fnc(['qkq','dwadwad',30]) */

const conta = function(operador,acumulador,...numeros){ //parametro resto(...)
    for(let numero of numeros){
       if(operador === '+') acumulador+=numero;
       if(operador === '-') acumulador-=numero;
       if(operador === '/') acumulador/=numero;
       if(operador === '*') acumulador*=numero;
    }
    console.log(acumulador)
    console.log(arguments) // expressao para ver todos os argumentos
}
conta('/',0,20,30,40,50);

const conta1 = (...args) => {
console.log(args)
}
conta1('/',0,20,30,40,50);