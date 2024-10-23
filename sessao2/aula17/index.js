function saudacao(nome){
return `Bom dia ${nome}`;
}

const variavel = saudacao('Luiz');
console.log(variavel)



/////////////////////////////////////////////
function soma(x,y){
const resultado = x + y;
return resultado
}

console.log(soma(2,2))
console.log(soma('Tiago',' Sousa'))
console.log(soma(3,5))
console.log(soma(1.5,8.3))

function soma(x= 1,y = 1){
    const resultado = x + y;
    return resultado
    }

    console.log(`A soma de x= 1 e y=1 é de: ${soma()}`)


    
//////////////////////////

function dividir(a,b){
    const resDividir = a / b;
    return resDividir
}
console.log(`A divisão é de: ${dividir(10,2)}`)
console.log(`A divisão é de: ${dividir(9,3)}`)



//////////////////////////
const raiz =  function(numero){
return numero ** 0.5;
};

console.log(` A raiz de 9 é: ${raiz(9)}`)



/////////////////////////////
const qlqcoisa = (n) => {
    return n * 2;
}

console.log(`5 x 2 = ${qlqcoisa(5)}`)

