function qlqcoisa (){
const form = document.querySelector('.form') //utilizar .form pois é uma classe , modo de interligar equivalente a css
const resultado = document.querySelector('.resultado')

const pessoas = [];

function recebeEventoForm (evento) {

    evento.preventDefault();

    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

  pessoas.push({
    nome: nome.value,
    sobrenome: sobrenome.value,
    peso: peso.value,
    altura: altura.value

  })
console.log(pessoas);

resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value}</p>`+ `${peso.value} ${altura.value}`

}
form.addEventListener('submit',recebeEventoForm);
}

qlqcoisa();




//form.onsubmit = function (evento) {
   // evento.preventDefault();
    //alert(1);
    //console.log('Foi Enviado')
//}

/*

let contador = 1;
function recebeEventoForm (evento) {
    evento.preventDefault();
    console.log(`Form nao foi enviado : ${contador}`)
    contador ++;
}


*/