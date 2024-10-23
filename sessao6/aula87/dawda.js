function rand(min, max) { //        funçao para gerar um numero aleatorio
  min *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) { 
  //                                 criar promise = ou se aceita ou rejeita
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(false); 

    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na Promise");
    }, tempo);
  });
}
//                               Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
  //"Primeiro Valor",
  esperaAi("Promise 1",rand(1,5)),
  esperaAi("Promise 2", rand(1,5)),
  esperaAi("Promise 3", rand(1,5)),
  //esperaAi(10000,2)
  //esperaAi(1000, 1000),

 // "Outro valor",
];


/* Promise.all(promises)                entrega todos os valores 'all', caso seja 
  .then(function (valor) {              rejeitada nao entrega mais valores
    console.log(valor);
  }) */
  Promise.race(promises)                // entrega o primeiro valor 'race'
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });


  function baixaPagina(){
    const emCache = false;
    if(emCache){
        return Promise.resolve('Pagina em Cache')
    }else{
        return esperaAi('Baixei a Página', 3000) // em 3 segundos
    }
  }

  baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina)
  })
  .catch(erro=>{
    console.log('erro',erro)
  })