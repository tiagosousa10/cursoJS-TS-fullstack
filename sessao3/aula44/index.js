function soma(x,y){
    if (
        typeof x !== 'number' || 
        typeof y !== 'number'
        ) {
        throw new ReferenceError('x e y precisam de ser numeros')
    }
    return x + y;
}

try{
    console.log(soma(1,2))
    console.log(soma(1,'a'))
} catch(error){
   // console.log(error)
   console.log('Alguma coisa mais amigavel')
}



/* try{
    console.log(naoExisto);
} catch(erro){
    console.log('naoExisto não existe.')
    console.log(erro)
}
 */