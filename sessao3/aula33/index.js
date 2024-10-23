const pessoa = {
    nome: 'Tiago',
    sobrenome:'Sousa',
    idade: 22,
    endereco: {
      rua: 'Rua qlql Coisa'  ,
      numero: 77
    }
}
//atribuição via desetruturação
const {
  endereco: { rua, numero} , endereco
} = pessoa;
console.log(endereco)

const {nome,sobrenome, ...resto} = pessoa;
console.log(resto)



