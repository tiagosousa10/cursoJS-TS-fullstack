// ? : 
//estrutura igual ao if , operaçao ternaria
// (condicao) ? 'Valor Verdadeiro' : 'Valor para Falso' ;
const pontuacaoUsuario = 1999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal'

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)

// const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal'
// é igual à expressao utilizada em cima realçada nos comentarios (operaçao ternaria) 

/*
if(pontuacaoUsuario >= 1000){
    console.log('Usuario VIP')
} else{
    console.log('Usuario Normal')
}
 */
//outra maneira
