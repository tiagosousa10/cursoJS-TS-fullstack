/* const pessoa = { //criar objeto
nome: ' Luiz ',
sobrenome: 'Otavio'
}

//new Array(); []
const pessoa1= new Object();
pessoa1.nome = 'Tiago'
pessoa1.sobrenome="Sousa"

console.log(pessoa1.nome, pessoa) */

/* 
const pessoa1 = new Object();
pessoa1.nome="Tiago"
pessoa1.sobrenome="Sousa"
pessoa1.idade = 30;
pessoa1.falarNome= function(){
    console.log(`${this.nome} está falando o seu nome e seu sobrenome ${this.sobrenome}`)
}

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date(); //aceder a data atual
return dataAtual.getFullYear() - this.idade; //ano atual - idade  = data nascimento


}


for ( let chave in pessoa1){
    console.log(pessoa1[chave])
} */

/* pessoa1.falarNome();

delete pessoa1.sobrenome;
console.log(pessoa1) */

//          fACTORY functions /     Constructor functions /     Classes
/* function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto(){
        return `${this.nome}  ${this.sobrenome}`
    }
  };
}

const a = criaPessoa('Tiago', 'Sousa')
console.log(a.nomeCompleto()) */


function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;  
    Object.freeze(this)  // nao se pode alterar os valores (nome, idade)
}

// {} <- this
const p1 = new Pessoa('Tiago','Sousa')
Object.freeze(p1)
p1.nome = 'Outra Coisa';
p1.sobrenome('Sousa')
p1.fala = function (){console.log('Oi')}
p1.fala()
const p2 = new Pessoa('Joana','Sousa')
console.log(p1)
console.log(p2)


//###############################################################

function Pessoa2(nome,sobrenome,idade){
    this.nome= nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

const a = new Pessoa2("Tiago","sousa",30)
console.log(a)
