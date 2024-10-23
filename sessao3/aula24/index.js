/* 
Entre  0 e 11 horas - Bom dia 
Entre 12 e 17 - Boa tarde
Entre 18-23 - Boa noite
*/

// if pode ser usado sozinho
// sempre que utilizo a palavra else preciso de um if antes
//posso ter varios else ifs no sistema
// só posso ter um else na checagem
// podemos usar condiçoes sem else if (utilizando apenas if e else)

const hora = 55;

if (hora >= 0 && hora <= 11) { // se a condição for verdadeira
    console.log('Bom dia'); // executa o bom dia
} 
else if(hora >=12 && hora <= 17){
    console.log('Boa tarde');
}
else if(hora >=18 && hora <=23){
console.log('Boa noite');
}
else {
    console.log('Olá, fora de horas , 0 e 23')
}

const tenhoDinheiro = true;
const salario = 1500;

if (tenhoDinheiro && salario >= 1500){
    console.log('Vou sair de casa');
}
else {
    console.log('Não vou sair de casa')
}