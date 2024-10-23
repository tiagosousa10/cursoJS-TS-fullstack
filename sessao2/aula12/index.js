let varA = 'A'; // b
let varB = 'B'; // c
let varC = 'C'; // a

console.log("1st: ",varA,varB,varC);

/*const tempA = varA; //criar uma variavel para guardar o valor da variavelA

varA = varB; //certo
varB = varC; // certo
varC= tempA; //certo

console.log("2st: ",varA,varB,varC);
*/



//outra maneira de resolver a questao
[varA, varB, varC] = [varB, varC, varA]
console.log("3st: ",varA,varB,varC);
