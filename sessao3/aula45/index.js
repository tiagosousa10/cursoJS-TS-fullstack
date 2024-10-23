/* try{
    //console.log(a)
    //é executada quando não há erros
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei arquivo')

    try{
console.log(b)
    } catch(e) {
console.log('deu erro')
    } finally{
console.log('tambem sou finally')
    }
} catch(e){
    //é executada quando há erros
    console.log('tratando o erro')
}finally{
    console.log('FINALLY: eu sempre sou executado')
    //sempre
} */

function retornaHora(data){
    if(data && !(data instanceof Date)) // se data for diferente do formato Date
{
    throw new TypeError('Esperando a instancia de Date')
}
if(!data) {
    data=new Date();
}
return data.toLocaleTimeString('pt-PT', {
hour:'2-digit',
minute: '2-digit',
second: '2-digit',
hour12: false
})
}

try{
    const data = new Date('01-01-1980 12:51:13');
    const hora = retornaHora();
    console.log(hora)
}catch(erro){
console.log(erro)
}finally{
    console.log('Tenha um Bom dia')
}
