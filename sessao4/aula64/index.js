/* //               -4      -3        -2     -1 
//                 0     1        2       3
const nomes = ['maria','joao','eduardo','gabriel '];
//remove .splice
const removidos = nomes.splice(-1,1,'Tiaago','otavio') //divider array ex.(3,2) ## Number.MAX_VALUE)
console.log(nomes,removidos) */

//

const nomes = ['maria','joao','eduardo','gabriel '];
//push
nomes.splice(-4,1,'Luiz','qlqcoisa')
//unshift
nomes.splice(0,0,'Luiz','qlqcoisa')
//remover
const removidos = nomes.splice(0,1)
console.log(nomes.length) 