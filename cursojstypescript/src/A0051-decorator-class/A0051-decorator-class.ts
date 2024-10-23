@decorator
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {}
}

//                      DECORATOR
//                  decorador -> intervir em Classes sem mexer diretamente nas Classes

//target -> receber a classe

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  console.log('cheguei ao DECORATOR');
  return class extends target {
    cor: string;
    nome: string;

    constructor(...args: any[]) {
      super(...args);
      //split = divide ,
      //reverse -> troca a ordem das palavras,
      //join -> junta as palavras
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

//
//const AnimalDecorated = decorator(Animal);
const animal = new Animal('Tiago', 'roxo');
console.log(animal);
