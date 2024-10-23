// capturar o evento de submit do formulario

const form = document.querySelector('#formulario')

//              função que captura o evento
form.addEventListener('submit', function(evento){
evento.preventDefault();
const inputPeso = evento.target.querySelector('#peso') // buscar o peso ao html , CAPTURAR PESO
const inputAltura = evento.target.querySelector('#altura') // buscar a altura ao html , CAPTURA ALTURA

const peso = Number(inputPeso.value) // converter o valor do campo para number
const altura = Number(inputAltura.value) // converter o valor do campo para number

//console.log(peso,altura)
if (!peso){ //utilizar uma expressao negativa caso o resultado seja falso
    setResultado('Peso Invalido', false)
    return;
}

if(!altura){ //utilizar uma expressao negativa caso o resultado seja falso
    setResultado('Altura Invalida', false)
    return;
}
//Continua o Código

const imc = getIMC(peso,altura); // criar constante que ira receber o valor da funçao  IMC com o valor do peso e altura
const nivelImc = getNivelImc(imc) // criar constante que recebe a funçao getNivelImc com o valor do imc

const mensagem = `Seu imc é ${imc} e o seu nivel é ${nivelImc}` // adicionar uma constante mensagem para retornar os valores na tela

setResultado(mensagem, true) // mostrar os resultados caso sejam verdadeiros
});


//                            função
//                             imc
function getIMC(peso,altura){ // passar os valores do peso e altura recebidos
const imc = peso /altura ** 2;
return imc.toFixed(2);
}


//                            função
//                  adicionar niveis ao imc
function getNivelImc(imc){
    //                          criação de um array
    //                  0               1           2               3
const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1',
//        4                 5
'Obesidade Grau 2','Obesidade Grau 3',]

if(imc >= 39.9) return nivel[5] // 5
if(imc >=34.9) return nivel[4] // 4
if(imc >= 29.9) return nivel[3] // 3
if(imc >= 24.9) return nivel[2] // 2
if(imc >= 18.5) return nivel[1]  // 1
if(imc < 18.5) return nivel[0] // 0


}




//              função que cria paragrafo
function criaP (){ 
    const p = document.createElement('p') // criar paragrafo
    return p;
    //p.classList.add('paragrafo-resultado') // adiciona uma lista de classes , neste caso paragrafo-resultado
//p.innerHTML= 'Qualquer coisa'
}


function setResultado (mensagem, isValid) { 
const resultado = document.querySelector('#resultado');
resultado.innerHTML = ''; // zera o resultado


// adiconar ao valor o criaP , que é uma funçao que cria paragrafos
const p = criaP();

if (isValid)  // se for verdadeiro adicionar uma cor
{
    p.classList.add('paragrafo-resultado')
} else{ // se for falso adicionar uma cor
    p.classList.add('bad')
}

p.innerHTML = mensagem; // colocar no paragrafo o que vier na mensagem
resultado.appendChild(p) // agregar o resultado com o paragrafo
}