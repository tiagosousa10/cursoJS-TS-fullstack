const {lookahead} = require('./base')


console.log(lookahead)
//console.log(lookahead.match(/.+[^in]active$/gim))

// Positive lookahead (frases que tem active)
//console.log(lookahead.match(/.+(?=[^in]active)/gim))

// Positive lookahead (frases que tem inactive)
//console.log(lookahead.match(/.+(?=\s+inactive)/gim))

// Negative lookahead) (frase que NAO tem active)
//console.log(lookahead.match(/(?!.+[^in]active).+$/gim))

// Negative lookahead) (frase que NAO tem active)
//console.log(lookahead.match(/(?!.inactive).+$/gim))

//tem ONLINE À FRENTE (Positive lookbehind)
console.log(lookahead.match(/(?<=ONLINE\s+).*/gim))

//Não começa com ONLINE À FRENTE (Negative lookbehind)
console.log(lookahead.match(/·+(?<!ONLINE.+)$/gim))

const cpf =`

012.250.796-10
212.938.796-13
377.150.396-10
`

console.log(cpf.match(/^(?=^(\d)\1{2}\.\1{3}\.\1{3})\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm))


