const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}

// For classico - geralmente com iteraveis(array ou strings)
// For in - Retorna o indice ou chave(strings, arrays ou objetos)
// For off - Retorna o valor em si (iteraveis, arrays ou strings)


/* const nome = ['Luiz Otavio', 'Qlq Coisa']; */

/* for (let i in nome){
    console.log(nome[i])
}
//                  -------------
console.log('####')

for(let valor of nome){
console.log(valor)
}
//                  -------------
console.log('####')

 for (let i = 0; i < nome.length; i++){
    console.log(nome[i])
}
/*
for(let i in nome){
    console.log(nome[i])
} */

//                  -------------
/* console.log('####')
nome.forEach(function(valor,indice, array){
    console.log(valor,indice, array)
});  */