const a1 = [1,2,3,4,5,6,73,83,91]
let total=0;
a1.forEach(valor => {
total+= valor
})

console.log(total)

/* 
a1.forEach(function(valor,indice,array){ //equivale a um for
  console.log(valor,indice) //devolve o valor e o indice do array a1
  console.log(array[indice]) //
})



for(let valor of a1){
  console.log(valor)
} */