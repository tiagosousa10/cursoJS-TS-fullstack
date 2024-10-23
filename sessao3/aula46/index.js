function mostraHora(){
    let data = new Date();

    return data. toLocaleTimeString('pt-PT', {
        hour12:false
    })
}

function funcaoDoInterval(){
    console.log(mostraHora());
}

const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000);// a função executa em 1000ms = 1s

setTimeout(function(){
    clearInterval(timer)
}, 3000)

setTimeout(function(){
console.log('oollaaaaa mundo')
},5000)