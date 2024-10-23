/*
// ver o site developer.mozila
const tresHoras = 60 * 60 * 3 * 1000; // 3 horas em milesimos de segundo
const umDia = 60 * 60 * 24 * 1000; // 1dia em milesimos de segundo
const data = new Date(0 + tresHoras + umDia); // new = função construtora e começa com letra maiuscula, neste caso 'D'
console.log(data.toString())
console.log('')


//1ºformato = a, m ,d ,h ,M,s,ms
// o mês começa do numero 0 logo ex. abril = 3
//                      ano  mês  dia hora min  seg  
const data2 = new Date(2019 , 3 , 20 , 15 , 14 , 27)  
console.log(data2.toString())

console.log('')

const data3 = new Date ('2019-04-05 20:20:59')

console.log('Dia', data3.getDate())
console.log('Mês', data3.getMonth() +1) // Mes começa do zero (0)
console.log('Ano', data3.getFullYear())
console.log('Hora', data3.getHours())
console.log('Min', data3.getMinutes())
console.log('Seg', data3.getSeconds())
console.log('ms', data3.getMilliseconds())
console.log('Dia Semana', data3.getDay()) // 0 = Domingo, 6 = sabado

console.log(data3.toString())

console.log(Date.now())


*/
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}


function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() +1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora= zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}`

}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)