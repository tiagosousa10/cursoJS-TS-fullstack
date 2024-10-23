const dadosCliente1: readonly [number, string] = [1, 'Tiago'];
const dadosCliente2: [number, string, string] = [1, 'Tiago', 'Sousa'];
const dadosCliente3: [number, string, string?] = [1, 'Tiago', 'Sousa'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Tiago', 'Sousa'];

/* dadosCliente1[0] = 100;
dadosCliente1[1] = 'André' ;*/
//dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

const array1: readonly string[] = ['dwadw', 'dwadggg'];
const array2: ReadonlyArray<string> = ['dwadw', 'dwadggg'];

console.log(array1, array2);
