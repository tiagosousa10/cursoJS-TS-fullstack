let num1 = prompt('Digite um numero: ')
let num2 = prompt('Digite um numero: ')

num1 = parseFloat(num1); //ou Number , etc
num2= parseFloat(num2); //ou Number , etc

let resultado;
resultado = num1 + num2;

console.log(resultado);
console.log(typeof resultado)
resultado= alert(`Resultado: ${resultado}`)


let multiResultado;
multiResultado = resultado * num1;
multiResultado= parseFloat(multiResultado)
console.log(typeof multiResultado)
console.log(multiResultado)
alert(`multiResultado: ${multiResultado}`)