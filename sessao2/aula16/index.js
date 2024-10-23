//            012345678910  
const nome = "Luiz Otavio" // acessar as posiçoes das strings, etc
console.log(nome[0]) // = L

//                 0       1        2
const alunos = ['Luiz', 'Maria' , 'Joao']; // acessar aos arrays
console.log(typeof alunos)
console.log(alunos instanceof Array)
console.log(alunos[1])

alunos.push('Otavio') // adicionar elementos no array
alunos.push('Tiago')  // adicionar elementos no array

alunos.unshift('Francisca') //adicionar no inicio do array
const removido = alunos.pop(); //pop elimina o ultimo
console.log(removido) 
const removido2 = alunos.shift(); //shift elimina o primeiro [0]
console.log(removido) 



console.log(`Comprimento do array : ${alunos.length}`)
console.log(`Nome dos Alunos : ${alunos} `)


console.log(`Posição [0] ${alunos[0]}`) // 0 Luiz / Tiago
console.log(alunos[1]) // 1 Maria / Joana 


alunos[0] = 'Tiago' // editar a string na posicao 0
alunos[1] = 'Joana' // editar a string na posicao 1
console.log(alunos[0]) // 0 Luiz / Tiago
console.log(alunos[1]) // 1 Maria / Joana