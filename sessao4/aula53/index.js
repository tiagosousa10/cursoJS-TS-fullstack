function retornaFuncao() {
  const nome = "Luiz";
  return function() {
    return nome;
  };
}

const funcao = retornaFuncao('qlq coisa');
const funcao2 = retornaFuncao('  awdwadwa');
console.log(funcao(), funcao2()); 