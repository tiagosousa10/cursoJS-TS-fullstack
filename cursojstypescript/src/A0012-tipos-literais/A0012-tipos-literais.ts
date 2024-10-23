let x= 10; // eslint-disable-line
//x=  321g2a;
const y = 10;
// ou const a = 100
let a = 100 as const; // eslint-disable-line

const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Azul'));

//module mode
export default 1;
