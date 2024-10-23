/* aritméticos

+ = adição / concatenação
** = Potencias
% = resto da divisão
- / *



ordem das operaçoes
()
**
*
/ %
+ -



*/

const num1 = 5;
const num2 = 3 ;
const num3 = 10


console.log((num1 + num2) * num3);

//
let contador = 1;
contador ++; //2
contador ++; //3
++contador; //4

/*
 incremento = ++ 
decremento = --
*/
console.log(`contador: ${contador++}`);
console.log(contador)
console.log(contador--)
console.log(contador)


const passo = 2;
let contador2= 0;

contador2 = contador2 + passo ;
console.log(`teste do contador: ${contador2}`)
contador = contador + passo ;
console.log(`teste do contador: ${contador2}`)

contador = contador + passo ;
console.log(`teste do contador: ${contador2}`)

let x = 2;
x+=2;
x--;
x*=2;
x--;
console.log(x);


let c = 2;
c **= 10;
console.log(`${c}`)

// NaN - Not a number


const numero1 = 10;
const numero2 = parseInt('5'); // transformar em inteiro == parseInt , parseFloat(decimal)
console.log(numero1 + numero2);
console.log(typeof numero2);