const path = require('path')
const caminhoArquivo = path.resolve(__dirname,'..','teste.json')
const escreve= require('./modules/escrever')
const ler = require('./modules/ler')

/* const pessoas = [
    {nome: 'Tiago'},
    {nome: 'André'},
    {nome: 'Eduardo'},
    {nome: 'Joana'},
]


const json = JSON.stringify(pessoas,'',2)

escreve(caminhoArquivo,json) */

async function lerArquivo(caminho){
   const dados=  await ler()
   renderizaDados(dados)
}


function renderizaDados(dados){
dados= JSON.parse(dados)
dados.forEach(val=> console.log(val.nome))
}

lerArquivo(caminhoArquivo)