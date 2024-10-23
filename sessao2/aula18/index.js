               // 0 1 2
/* const array = [1,2,3];
array.push(4)
array[0] = 'Tiago'
array[1] = 'qlqcoisa'

console.log(array)

const pessoa1 = {
    nome : 'Luiz', 
    sobrenome : 'Miranda',
    idade: 25
}
const pessoa2 = {
    nome : 'Maria', 
    sobrenome : 'Oliveira',
    idade: 75
}


console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

function criaPessoa (nome, sobrenome, idade){ // cria objetos esta função
    return{
        nome,
        sobrenome,
        idade,
    }
}

const pessoa1 = criaPessoa('Tiago', 'Sousa', 22);
const pessoa2 = criaPessoa('Luiz', 'x', 31);
const pessoa3 = criaPessoa('Joao', 'a', 31);
const pessoa4 = criaPessoa('James', 'qlqcdwadwa', 31);
const pessoa5 = criaPessoa('Teresa', 'sim', 31);

console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade, pessoa4.nome, pessoa5.idade)
*/



const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Qlqcoisa',
    idade: 33,

fala() { //funçao executa açoes
console.log(`${this.nome} ${this.sobrenome} e tem ${this.idade} anos.`) //this representa a pessoa1
},

incrementaIdade(){
    ++this.idade; //incrementa a idade
}
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
