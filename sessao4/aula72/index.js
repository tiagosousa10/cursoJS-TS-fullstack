//defineProperty -> defineProperties
function Produto(nome, preco, stock) {
  this.nome = nome;
  this.preco = preco;
  let stockPrivado = stock;
  Object.defineProperty(this, "stock", {
    enumerable: true, //mostra a chave
    configurable: true, // configuravel
    get: function () {
      return stockPrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
      //  throw new TypeError("Mensagem");
      }
      stockPrivado = valor;
    },
  });
}
function criaProduto() {
  return {
    get nome() {
      return this.nome;
    },
    set nome(valor) {
      nome = valor;
    },
  };
}

/* const produto1 = new Produto("Camisola", 20, 3);
console.log(produto1);
produto1.stock = "dwadwadawdwa";
console.log(produto1.stock);
 */

const p2 = criaProduto('camisolaaaaa')
console.log(p2)