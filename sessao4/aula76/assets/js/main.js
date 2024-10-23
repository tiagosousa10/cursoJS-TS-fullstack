//Produto -> aumennto e desconto
// Camiseta = cor, caneca = material

// ##########################################################
// ##########################################################
// ##########################################################
//              criar construtor Produto com nome e preço
function Produto(nome, preco) {
  (this.nome = nome), (this.preco = preco);
}
//criar funçao de aumento e desconta para produto usando o prototype
//                  aumento
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
//                  desconto
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

// ##########################################################
// ##########################################################
// ##########################################################

//Herança
//Camiseta herda Produto
//criar contrutor Camiseta
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco); //linkar as duas funçoes , ACEDER AS chaves de Produto
  this.cor = cor;
}
//          prototype é um objeto
Camiseta.prototype = Object.create(Produto.prototype); //criar um objeto vazio e colocor o prototype do produto
Camiseta.prototype.constructor = Camiseta;

//criar o aumento para a camiseta
Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * percentual) / 100;
};

function Caneca(nome, preco, material, stock) {
  Produto.call(this, nome, preco);
  this.material = material;

  //criar as chaves do stock com get e sets
  Object.defineProperty(this, "stock", {
    enumerable:true,
    configurable: false,
    get: function () {
      return stock;
    },
    set: function (valor) {
        if(typeof valor !== 'number') return
      stock = valor;
    },
  });
}
//linkar o prototype de PRODUTO com CANECA
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

//cria um novo produto e uma nova camiseta
const produto = new Produto("Generico", 111);
const camiseta = new Camiseta("Regata", 7.5, "Preta");
const caneca = new Caneca("Caneca", 7.5, "Plástico", 5);
caneca.stock = 50;

//mostra os dados
//console.log(camiseta);
console.log(caneca);
console.log(caneca.stock);