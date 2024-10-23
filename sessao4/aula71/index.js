//defineProperty -> defineProperties
function Produto(nome, preco, stock) {
    this.nome= nome;
    this.preco = preco;
  Object.defineProperty(this, "stock", {
    enumerable: true, //mostra a chave
    value: stock, //valor da chave
    writable: false, // controla se o valor pode ser alterado ou nao
    configurable: true, // configuravel
  });
  /* Object.defineProperty(this, {
    nome: {
      numerable: true, //mostra a chave
      value: stock, //valor da chave
      writable: false, // controla se o valor pode ser alterado ou nao
      configurable: true, // configuravel
    },
    preco: {
      numerable: true, //mostra a chave
      value: stock, //valor da chave
      writable: false, // controla se o valor pode ser alterado ou nao
      configurable: true, // configuravel
    },
  });
} */

const produto1 = new Produto("Camisola", 20, 3);
console.log(Object.keys(produto1));

for (let chave in produto1) {
  console.log(chave);
}
