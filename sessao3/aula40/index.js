const numeros = [1,2,3,4,5,6,7,8,9];
//continue = continua para a proxima açao
//break = para na açao
let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2 ){
        console.log('Pulei o numero 2')
        i++;
        continue;
    }

 
    if (numero ===7){
        console.log('7 encontrado, saindo...')
    break; // chega apenas ao 6 e corta

    }
    i++;
    console.log(numero)
}
/* 
for (let i in numeros) {
    let numero = numeros[i];

    if (numero === 2 ){
        console.log('Pulei o numero 2')
        continue;
    }
    /* if(numero ===5){
        continue;
    } 
    
 
    if (numero ===7){
        console.log('7 encontrado, saindo...')
    break; // chega apenas ao 6 e corta

    }
    console.log(numero)
}
 */
/* for (let numero of numeros) {

    if (numero === 2 ){
        console.log('Pulei o numero 2')
        continue;
    }
    /* if(numero ===5){
        continue;
    } 
 
    if (numero ===7){
        console.log('7 encontrado, saindo...')
    break; // chega apenas ao 6 e corta

    }
    console.log(numero)
} */

