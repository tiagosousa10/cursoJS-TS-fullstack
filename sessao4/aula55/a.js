// IIFE -> IMMEDIATLY invoked function expression

(function(idade,peso,altura){

    const sobrenome = 'Miranda'
function criaNome(nome){
    return nome+ ' '+ sobrenome;
}

function falaNome(){
    console.log(criaNome('Tiago'))
}

falaNome();
console.log(idade,peso,altura)


})(30,80,1.80);

