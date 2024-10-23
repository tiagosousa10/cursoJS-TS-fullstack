/* const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        //entre 200 e 300 sao codigos http de SUCESSO
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    }); */

// ver qual o elemento foi clicado
document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase(); // pegar o nome da tag <a> do html

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el); // receber o link
  }
});

async function carregaPagina(el) {
  try{
    const href = el.getAttribute("href"); //mostra o link no cmd
  const response = await fetch(href)

  if(response.status !==200 ) throw new Error('Error 404')
  
  const html = await response.text()
  carregaResultado(html)

  
  } catch(e){
    console.log(e)
  }
  

}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado"); // aceder ao resultado html
  resultado.innerHTML = resultado;
}

/* 
fetch('pagina1.html')
.then(resposta => {
  if(resposta.status !== 200) throw new Error('Erro 404 Nosso!')
  return resposta.text()
})
.then(html => console.log(html))
.catch(e => console.warn(e)) // console.war (coloca o txt a VERMELHO) */
