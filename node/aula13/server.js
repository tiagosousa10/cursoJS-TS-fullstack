const express = require ('express') // importar o express
const app = express();// carregar o express
const routes = require('./routes')
const path = require('path')
const {middlewareGlobal} = require('./src/middlewares/middleware')
app.use(
    express.urlencoded(
        {
            extended:true
        }
    )
)


app.use(express.static(path.resolve(__dirname,'public')))
app.set('views', path.resolve(__dirname, 'src', 'views')) // caminho absoluto
//app.set('views', './src/views') // caminho relativo , pode dar problemas
app.set('view engine', 'ejs') // ejs = renderizar as views


//nossos proprios MIDDLEWARES
app.use(middlewareGlobal)
//app.use(outroMiddleware)
app.use(routes)



app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor rodando na porta 3000')
}) // definir a porta do site // rodar o servidor = node server.js

