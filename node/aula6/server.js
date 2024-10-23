const express = require ('express') // importar o express
const app = express();// carregar o express

//          criar     ler     atualizar    apagar
// crud =   create,   read,     update,     delete
//          post      get       put         delete
//http://meusite.com <- GET -> Entregar a pagina

app.get('/',(req,res) =>{
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
        `)
})

app.post('/', (req,res) => {
    res.send('Recebi o formulario')
})

app.get('/contacto', (req,res) => {
    res.send('obrigado pelo contacto')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor rodando na porta 3000')
}) // definir a porta do site // rodar o servidor = node server.js