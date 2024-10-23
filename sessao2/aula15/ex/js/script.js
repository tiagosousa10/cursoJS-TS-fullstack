//declarar variaveis e interligar os ids
const numero = Number(prompt("Digite um numero: ")); // transformar sempre em numero, evitar erros devido aos formatos strings
const numeroTitulo = document.getElementById('numero-titulo'); //adquirir o id do documento html
const texto = document.getElementById('texto'); //adquirir o id do documento html

numeroTitulo.innerHTML = numero; // enviar o numero digitado para o id
//texto.innerHTML = `<p>Seu numero - 2 é ${numero - 2} </p>`;

texto.innerHTML=' '
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5} </p>`; //raiz quadradada
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)} </p>`; //inteiro=
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)} </p>` //NaN?
texto.innerHTML += `<p>para baixo arredondar: ${Math.floor(numero)} </p>` //para baixo arredondar
texto.innerHTML += `<p>para cima arredondar: ${Math.ceil(numero)} </p>` //para cima arredondar
texto.innerHTML += `<p>duas(2) casa decimais: ${numero.toFixed(2)} </p>` //duas(2) casa decimais