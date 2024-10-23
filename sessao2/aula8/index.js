const nomeCliente = "Tiago";
const apelidoCliente = "Sousa";
const peso = 87 ;
const idade = 22 ;
const altura = 1.80;
//imc
let imc;
imc = peso / (altura * altura)

//ano nascimento
let anoNascimento;
anoNascimento = 2023 - idade;

console.log("imc: ", imc)
console.log("Ano de Nascimento: ", anoNascimento)

console.log("Nome: " , nomeCliente, ", Apelido: " ,apelidoCliente, ", Ano Nascimento: ", anoNascimento, ", IMC: ", imc)
console.log("Nome: ", nomeCliente + ' ' + apelidoCliente)

//template strings
console.log(' ')
console.log(`Nome:  ${nomeCliente} ,  Apelido:  ${apelidoCliente}, Ano Nascimento: ${anoNascimento} , IMC: ${imc}`)
console.log(`Nome:  ${nomeCliente} , Apelido: ${apelidoCliente}`)


