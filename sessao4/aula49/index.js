//declarar funcao (function hoisting)
function falaOi(){
    console.log('Oie');
}
falaOi(); //pode ser antes ou depois

//first-class Objects (objetos de primeira classe = funçoes)
//Function Expression
const souUmDado = function(){
console.log('sou um dado.')
}
souUmDado();

function executaFuncao (funcao){
    console.log('vou executar sua funcao abaixo: ')
    funcao();
}

executaFuncao(souUmDado)

// Arrow function 
const funcaoArrow = () => {
    console.log('sou uma arrow funçao...')
}

funcaoArrow();

//DENTRO DE UM OBJETO

const obj = {
    falar: function(){
        console.log('Estou fallando ...');
    }
}
obj.falar();