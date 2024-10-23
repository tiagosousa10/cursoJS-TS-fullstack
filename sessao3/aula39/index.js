/* const nome = 'Luiz';
let i = 0;

while(i < nome.length){
 console.log(nome[i]);
 i++;
}
 */

function random (min, max){
    const r = Math.random() * (max -min) + min;
    return Math.floor(r); // arredondar
}

const min = 1;
const max = 50;
let rand = 10;

//          while
while(rand !== 10){
    rand = random(min,max);
    console.log(rand);
}

console.log('#########')
//          do while
do {
    rand = random(min,max);
    console.log(rand);
} while(rand !== 10);