const numero = 5;
const multiDois = 2;
const elevadoTres =  3;
let resultado;

function multiDoisNumero(){
resultado = numero * multiDois;
console.log(`Resultado MultiplicadoDois: ${resultado}`)
}
function elevadoTresNumero(){
    resultado = numero * elevadoTres;
    console.log(`Resultado elevadoTres: ${resultado}`)
}

function entreZeroeCinco () {
    console.log('Sim, o numero esta entre 0 e 5')
}

function entreSeiseDez(){
    console.log('Sim, o numero esta entre 6 e 10')
}

function foraValores(){
    console.log('Sim, o numero está fora dos valores 0 e 10')
}



if (numero >= 0 && numero <= 5) {
    entreZeroeCinco();
    multiDoisNumero();
} else if (numero >= 6 && numero <= 10) {
    entreSeiseDez();
    elevadoTresNumero();
}
else if(1 ===1){
    console.log('LITERAL')
}
else {
    foraValores();
}

console.log('O Processo continua...')