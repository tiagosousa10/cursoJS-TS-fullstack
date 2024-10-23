// return
//retorna um valor
// termina a funçao

/* function soma(a,b){
    return a + b;
}

console.log(soma(2,3)) */


/* document.addEventListener('click', function() {
    document.body.style.backgroundColor='red';
}); */

/* 

function criaPessoa(nome, sobrenome){
    return{nome, sobrenome}
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = {
    nome: 'Tiago',
    sobrenome: 'Oliveira'
}

console.log(p1)
console.log(p2) */


/* function falaFrase(comeco){
    function falaResto(resto){
        return comeco + '' +  resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá')
const resto = fala(' mundo')
console.log(resto) */

function criaMultiplicador(multiplicador){
//multiplicador
return function(n) {
    return n * multiplicador;
};
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(3))
console.log(quadriplica(4));