export class Pessoa<T, U> {
  constructor(
    public nome: T,
    public idade: U,
  ) {}
}

//                    stack = pilha
export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  //adicionar elementos
  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  //remover elementos no final da pilha
  pop(): T | void {
    if (this.estaVazia()) return undefined;
    //faço um decremento
    this.contador--;
    //pego no ultimo index dos elementos
    const elemento = this.elementos[this.contador];
    //retorno o elemento
    return elemento;
  }

  //verificar se esta vazia
  estaVazia(): boolean {
    return this.contador === 0; // se for igual a 0 = estaVazia
  }

  //verificar o tamanho
  tamanho(): number {
    return this.contador;
  }

  //mostrar a pilha
  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha<number>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.mostrarPilha();

while (!pilha.estaVazia()) {
  console.log(pilha.pop);
}
