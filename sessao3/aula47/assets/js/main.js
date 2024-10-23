function relogio(){
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    console.log(criaHoraDosSegundos(10))
    
    const relogio = document.querySelector('.relogio')
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++; // incrementar os segundos
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000); // a cada 1 segundo
    }
    
    //                                        evento
    document.addEventListener('click', function (e) {
        //  elemento
        const el = e.target;
        //console.log(el)
        if (el.classList.contains('zerar')) {
            clearInterval(timer) // parar o temporizador
            relogio.innerHTML = '00:00:00' //voltar ao inicio
            segundos = 0;
        }
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer) // clear no temporizador e prevenir que nenhum esta em funcionamento
            iniciaRelogio(); // iniciar a contagem  
        }
        if (el.classList.contains('pausar')) {
            clearInterval(timer) // parar o temporizador
            relogio.classList.add('pausado')
        }
    
    
    });
}

relogio();



//testar se as conexao html e js estao feitas corretamente
// apenas com alerts, etc
/* iniciar.addEventListener('click', function(event){
   relogio.classList.remove('pausado')
    clearInterval(timer) // clear no temporizador e prevenir que nenhum esta em funcionamento
    iniciaRelogio(); // iniciar a contagem
})
pausar.addEventListener('click', function(event){
    clearInterval(timer) // parar o temporizador
    relogio.classList.add('pausado')
})
zerar.addEventListener('click', function(event){
    clearInterval(timer) // parar o temporizador
    relogio.innerHTML = '00:00:00' //voltar ao inicio
    segundos = 0;

})  */