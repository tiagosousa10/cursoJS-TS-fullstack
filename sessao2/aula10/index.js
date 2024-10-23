const nome = 'Tiago';  //string
const nome1 = "Tiago"; //string
const nome2 = `Tiago`; //string

const num1 = 10; //number
const num2 = 10.52; //number
 

let nomeAluno; // undefined = nao aponta para local nenhum na memória
const sobrenomeAluno = null; //Nulo =  nao aponta para local nenhum na memória
const aprovado = true; //boolean = true ,false (lógico)

console.log(typeof num1,' , ', num1)


let a = [1,2];
const b = a;

console.log(a,b);
b.push(3);
console.log(a,b)

let c = 3
const d = c;
console.log(c,d);
c =4 ;
console.log(c,d)

