function rand(min = 0, max = 3) {
  //        funçao para gerar um numero aleatorio
  min *= 1000;
  min *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  //                                 criar promise = ou se aceita ou rejeita
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject('ERRRRRRROOOOOOOOO!!!!!');

    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na Promise");
    }, tempo);
  });
}

esperaAi("Fase 1", rand(0, 3)).then((valor) => {
  console.log(valor);
  return esperaAi("Fase 2", rand())
    .then((fase) => {
    //  console.log(fase);
      return esperaAi("Fase 3", rand());
    })
    .then((fase) => {
    //  console.log(fase);
    })
    .then((fase) => {
     // console.log("terminamos na fase: ", fase);
    })
  //  .catch((erro) => console.log(erro));
});

// asyinc necessario para utilizar await
// await espera que as promises sejam finalizadas

//                  3estados : 
//                            pendente -> pending
//                            resolvida -> fullfilled
//                            rejeitada -> rejected

async function executa() {
  try {
    const fase1 = await esperaAi("Fase 1", 1000);
    console.log(fase1);

    setTimeout(function(){
console.log('Essa Promise estava PENDENTE!',fase1)
    },1100)

    const fase2 =  esperaAi('QLQCOISA 2', rand()); //                     pendente
    console.log(fase2);
    const fase3 = await esperaAi("Fase 3", rand());
    console.log(fase3);
    const fase4 = await esperaAi("Fase 4", rand());
    console.log(fase4);
    console.log("terminamos na fase: ", fase4);

  } catch (erro) {
    console.log(erro);
  }
}

//executa();


const teste2 = esperaAi('qlqcoisa',5000)
console.log(teste2)
