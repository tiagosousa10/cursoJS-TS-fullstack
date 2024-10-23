let umaString = "um \"Texto\""; //isto para colocar texto entre aspas
//            0123456789  
let string = "Texto Pequ";
//buscar a posiçao 3 da string
console.log(string[3])
console.log(string.concat(' ', 'em', ' ')); // adicionar palavras com o concat

//

console.log(string.indexOf('exto')) // buscar as posiçoes onde começa o texto
console.log(string.lastIndexOf('x', 3)) // buscar as posiçoes de tras para a frente 
console.log(string.match(/[a-z]/g)) // todas as letras minusculas
console.log(string.search(/[x]/)) // buscar a posiçao da letra x
console.log(string.replace('Texto', 'ABCD')) // trocar as palavras
console.log(string.replace(/x/, '#')) // substituir o x pelo #
console.log(string.length); // verificar o tamanho da string com length
console.log(string.slice(2, 5)); // comecar na posiçao/indice 2 e acabar no 5
console.log(string.slice(-5)); // de tras para a frente
console.log(string.split(' ', 2)); // dividir as palavras da string