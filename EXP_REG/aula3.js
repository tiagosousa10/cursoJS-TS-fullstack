const {texto, arquivos} = require('./base')

// * (opcionais) 0 ou n {0, x}
// + (obrigatorio )1 ou n {1,x}
// ? (opcionais)0 ou 1 {0,1}
// \ caracter de escape
// {min,max}
// {10,} no minimo 10
//{,10} de 0 a 10
//{5,10} de 5 a 10

/* console.log(texto)

const regExp1 = /Jo+ão+/gi
console.log('--------------------------')
console.log(texto.match(regExp1)) */

const regExp2 = /\.((jp|JP)(e|E)?(g|G))/g

for ( const arquivo of arquivos){
    const valido = arquivo.match(regExp2)
  //  if(!valido) continue;

    console.log(arquivo,valido)
}