//                                    Carrinho de Compras
export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];
  //inserirProduto
  inserirProduto(...produtos: Produto[]) {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }
  //quantidadeProdutos
  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  //valorTotal
  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}
//                                        Produto
export class Produto {
  constructor(
    public _nome: string,
    public preco: number,
  ) {}
}

const produto1 = new Produto('Camisola', 49.9);
const produto2 = new Produto('Caneca', 3.5);
const produto3 = new Produto('Sapatilhas', 77.1);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProduto(produto1, produto2, produto3);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeProdutos());
