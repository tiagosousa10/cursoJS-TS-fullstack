const express = require ('express') // importar o express
const app = express();// carregar o express
const routes = require('./routes')
app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
)
app.use(routes)


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor rodando na porta 3000')
}) // definir a porta do site // rodar o servidor = node server.js

