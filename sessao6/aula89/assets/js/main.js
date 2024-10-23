const request = (obj) => {
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
    });

    // ver qual o elemento foi clicado
    document.addEventListener("click", (e) => {
      const el = e.target;
      const tag = el.tagName.toLowerCase(); // pegar o nome da tag <a> do html

      if (tag === "a") {
        e.preventDefault();
        carregaPagina(el); // receber o link
      }
    });

  async  function carregaPagina(el) {
      const href = el.getAttribute("href"); //mostra o link no cmd

      objConfig = {
        method: "GET",
        url: href,
    
      };
      try{
        const response = await request(objConfig)
        carregaResultado(response)
      }catch(e){
        console.log(e)
      }
  
    }

    function carregaResultado(response) {
      const resultado = document.querySelector(".resultado"); // aceder ao resultado html
      resultado.innerHTML = resultado;
    }
  });
};
