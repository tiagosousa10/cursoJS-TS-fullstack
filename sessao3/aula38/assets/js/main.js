const paragrafos = document.querySelector('.paragrafos');
const ps= paragrafos.querySelectorAll('p') // selecionar todos os p

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody)

for (let p of ps){
    // nao se pode colocar (-) nos objetos
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffffff'
}

