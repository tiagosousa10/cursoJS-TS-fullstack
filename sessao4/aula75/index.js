/* const objA = { // criar um objeto -> Objetct.prototype
  chaveA: "A",
  //__proto__: Object.prototype
};
//nao é recomendavel utilizar __proto__

const objB = { // criar um objeto -> Objetct.prototype
  chaveB: "B",
  //__proto__: objA
};


const objC = new Object(); //outra forma de criar objetos
objC.chaveC = 'C'; //outra forma de colocar chaves nos objetos

Object.setPrototypeOf(objB,objA) //incorporar no objB o objA
Object.setPrototypeOf(objC,objB)
console.log(objC.chaveB) */

function Produto(nome, preco) {
  (this.nome = nome), (this.preco = preco);
}
//criar metodo para fazer desconto

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};
Produto.prototype.aumenta = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

/* 
  const p1 = new Produto('Camisola',50); // criar uma camisola que custa 50 euros
  p1.desconto(10) //atribuir um desconto de 10 %
  console.log(p1) //mostrar o preço

  const p2 =  new Produto('Calças',30); //criar umas calças que custam 30 euros
  p1.aumenta(20) // atribuir desconta de 20 %
  console.log(p2) //mostrar preço


  const p3 = {
    nome: ' caneca', //criar caneca
    preco: 15 //atribuir o preco de 15 euros
  }
  Object.setPrototypeOf(p3,Produto.prototype) // atribuir o Produto.prototype ao p3
  p3.desconto(50) // atribuir desconto de 50% ao p3
  console.log(p3)
 */
const p4 = Object.create(Produto.prototype, { //atribuir como Pai o Produto a p4
  preco: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 113,
  },
  tamanho2: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: 42,
  },
});

p4.aumenta(50)
console.log(p4)