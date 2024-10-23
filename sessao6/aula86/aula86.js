function rand(min, max) {
  // gerar numero random / aleatorio
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    //                  then     catch
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('Bad Value')
    setTimeout(() => {
      resolve(msg); //parametro unico
    }, tempo);
  });
}

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
esperaAi("Conexao com Base Dados", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dados da BASE", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta)
    return esperaAi(222222, rand(1,3))
  })
  .then(resposta => {
    console.log(resposta)
  })
  .then(resposta => {
    console.log('Exibir dados da BASE')
  })

  .catch(erro => {
    console.log('ERRO', erro)
  });
