const {alfabeto} = require('./base')


//  [abc] -> Conjunto [^] -> Negação
// [0-9] -> Range
// [min-maxQUALQUERCOISA][^min-maxQUALQUERCOISA] -> tudo menos isso (^)

console.log(alfabeto)
console.log(alfabeto.match(/[0-9]+/g)) 
console.log(alfabeto.match(/[a-z]+/g)) 
console.log(alfabeto.match(/[A-Z]+/g))
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g))  //negaçao
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g))  //UNICODE
console.log(alfabeto.match(/\w+/g))  
console.log(alfabeto.match(/\W+/g))  
console.log(alfabeto.match(/\d+/g))  
console.log(alfabeto.match(/\s+/g))  
console.log(alfabeto.match(/\S+/g))  


