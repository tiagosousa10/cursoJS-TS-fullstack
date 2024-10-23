const express = require ('express') // importar o express
const app = express();// carregar o express

app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
)

//                                              query string
// http://facebook.com/users/profiles/1321?campanha=googleads&nome_campanha=seila -> url params
app.get('/',(req,res) =>{
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nomeABC">
          outroCampo: <input type="text" name="outrocampo">
        <button>Enviar Formulário</button>
        </form>
        `)
})
// :idUsarios? -> pode ou nao ser exibido
// ex. /testes/?nome=tiago&sobrenome=soura&idade=10&facebookprofile=abcd = utilizar o .query
app.get('/testes/:idUsuarios?/:parametro?', (req,res) => {
//      /profiles/3 = params
//      /profiles/?chave1=dwada&chave2=dwddd = query
    console.log(req.params)
    console.log(req.query)
    res.send(req.query).facebookprofile // ou .params
})

app.post('/', (req,res) => {
    console.log(req.body) //
    res.send(`O que vc me enviou foi: ${req.body.nomeABC}`) // corresponde ao name do form //exibir resultado do pedido
})



app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor rodando na porta 3000')
}) // definir a porta do site // rodar o servidor = node server.js

