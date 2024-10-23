enum Cores {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 2
}
enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
}

/* console.log(Cores);
console.log(Cores.AZUL);
console.log(Cores[10]);
console.log(Cores.ROXO); */

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.VERMELHO);
