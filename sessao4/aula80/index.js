//                      map()

const pessoas = [
  {
    id: 3,
    nome: "Tiago",
  },
  {
    id: 2,
    nome: "José",
  },
  {
    id: 1,
    nome: "Joana",
  },
];

const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa
   novasPessoas.set(id, {...pessoa})
}

console.log(novasPessoas.get(1))


const novasPessoas1 = new Map();
for(const p of pessoas){
    const {id} = p
    novasPessoas1.set(id, {...p})
}

console.log(novasPessoas1.get(2))



/* for( const [identificador, {id,nome}] of novasPessoas){
    console.log(identificador,id,nome)
} */
/* for( const pessoa of novasPessoas.values()){
    console.log(pessoa)
} */

novasPessoas.delete(2)
console.log(novasPessoas)