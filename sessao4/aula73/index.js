//const produto = { nome: "caneca", preco: 1.6 };
//const caneca = { nome: produto.nome, preco: produto.preco };
//Object.freeze(produto);//congelo o produto, nao o posso alterar
//console.log(Object.keys(produto)) //um array com as chaves do produto
const produto = { nome: "caneca", preco: 1.6 };
//console.log(Object.values(produto)) //pegar os valores (caneca e 1.6)
//                 values

//console.log(Object.entries(produto))
//retorna chave=  nome/preco e valor =  caneca e 1.6
for( let [chave , valor] of Object.entries(produto)){
    //          1ele    2ele  
    console.log(chave, valor)
}

/* Object.defineProperty(produto,'nome',{
    writable:false,
    configurable:false,
    value:'Qualquer Coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
console.log(produto) */

/*Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties(define varias propriedades)
Object.defineProperty(define uma propriedade) */