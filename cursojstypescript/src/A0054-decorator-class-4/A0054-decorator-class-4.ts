type Constructor = new (...args: any[]) => any;

function inverteNomeECor(param1: string, param2: string) {
  //Closure
  return function (target: Constructor) {
    console.log('Sou o decorador e recebi', target);
    return class extends target {
      cor: string;
      nome: string;

      constructor(...args: any[]) {
        super(...args);

        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return (
          valor.split('').reverse().join('') + ' ' + param1 + ' ' + ' ' + param2
        );
      }
    };
  };
}

function outroDecorador(param1: string) {
  //parametros que vou inserir
  return function (target: Constructor) {
    // target refere-se a classe que o decorador está a trabalhar
    console.log('Sou o outro decorador' + ' ' + param1, target);
    return target;
  };
}

@outroDecorador('[O parametro do OUTROdecorador]') // 2
@inverteNomeECor('OutraCoisa', 'valor2') //1
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Tiago', 'roxo');
console.log(animal);
