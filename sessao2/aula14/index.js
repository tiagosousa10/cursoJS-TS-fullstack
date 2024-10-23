let num1 = 0.7; //number
let num2 = 0.1; //number
let txt = "arroz";
//
num1= ((num1 * 100) + (num2 *100)) / 100 //outra maneira de consertar as casas decimais
num1= ((num1 * 100) + (num2 *100)) / 100
num1= ((num1 * 100) + (num2 *100)) / 100

console.log(num1)

console.log(num1.toString() + num2); // converter string temporariamente logo nao faz a adição mas sim a junção (12.5)
console.log(typeof num1);
console.log(num1.toString(2)); // converter em binario
console.log(num1.toFixed(2)) // arredondar as casas decimais
console.log(Number.isInteger(num1)) // é inteiro?
console.log(Number.isNaN(txt))


num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1
num1 += num2; //1.1
num1 += num2; //1.2
num1 += num2; //1.3
num1 += num2; //1.4
num1 += num2; //1.5 

num1 = parseFloat(num1.toFixed(2)) // arrendodar para 1 e utilizar o float ou number para resolver o problema dos arrendondademntos e casas decimaais
console.log(num1)






