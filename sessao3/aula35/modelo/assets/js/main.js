const elementos = [ // array que contem varios objetos
    {tag: 'p', texto:'Qualquer Texto que voce quiser'},
    {tag: 'div', texto:'Frase 2'},
    {tag: 'section', texto:'Frase 3'},
    {tag: 'footer', texto:'Frase 4'},
];

const container = document.querySelector('.container') //buscar o container ao html
const div = document.createElement('div') // criar div

for (let i = 0 ; i < elementos.length ; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto)
    tagCriada.appendChild(textoCriado)
    // tagCriada.innerText = texto;
    div.appendChild(tagCriada);
    
}

container.appendChild(div)