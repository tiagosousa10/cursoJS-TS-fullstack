export function funcao(this: Date, argumento1: string, age: number): void {
  console.log(this);
  console.log(argumento1, age);
}

funcao.call(new Date(), 'Tiago', 30);
funcao.apply(new Date(), ['tiagoTESTE', 27]);
