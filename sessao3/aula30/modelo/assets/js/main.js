

const h1 = document.querySelector('.container h1') // selecionar o h1 do container
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];
    return diasSemana[diaSemana]

}

function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 
    'setembro', 'outubro', 'novembro', 'dezembro']
 return meses[numeroMes]
}
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
`de ${data.getFullYear()} ` + 
` ${zeroAEsquerda(data.getHours())} : ${zeroAEsquerda(data.getMinutes())}`

)
}

h1.innerHTML = criaData(data)


//                  2maneira
/*
const h1 = document.querySelector('.container h1') // selecionar o h1 do container
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-PT', {dateStyle:'full'})


*/

//                  3maneira
//const opcoes = {
  //  dateStyle: 'full',
    
//};

//h1.innerHTML = data.toLocaleDateString('pt-PT', opcoes)