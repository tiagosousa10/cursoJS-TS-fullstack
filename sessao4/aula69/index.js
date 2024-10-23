const numeros = [10,2,3,5,8,9,53,31,30]
const numerosPares = numeros
.filter(valor =>  valor % 2 ===0
).map(valor=> valor * 2
).reduce((ac,valor) => ac + valor)
console.log(numerosPares)