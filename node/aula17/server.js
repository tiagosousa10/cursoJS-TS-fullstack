require('dotenv').config()
const express = require ('express')                 // importar o express
const app = express();              // carregar o express
                    //conexao base dados
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING) // para nao mostrar os dados do user e pass da base dados utilizar o dotenv , ficheiro "env"
    .then(()=> {
        
        app.emit('pronto')
    })
    .catch( e => console.log(e)) // mostrar o erro caso nao funcione
const session = require('express-session') ;// guardar as sessoes na memoria
const MongoStore= require('connect-mongo')
const flash = require('connect-flash')
                //diretorias do projeto
const routes = require('./routes')
const path = require('path')
const helmet = require('helmet')
const csrf = require('csurf')
const {middlewareGlobal,checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')



//app.use chamar as variaveis/funçoes/rotas , etc...
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(helmet())
app.use(express.static(path.resolve(__dirname,'public'))) // arquivos estaticos , imgs , css , etc
app.set('views', path.resolve(__dirname, 'src', 'views')) // caminho absoluto
//app.set('views', './src/views') // caminho relativo , pode dar problemas
app.set('view engine', 'ejs') // ejs = renderizar as views

//configuraçao da session
const sessionOptions = session({
    secret: 'dwadwadawdwa',
    resave: false,
    saveUninitialized:false,
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTIONSTRING
    }),
    cookie:{
        maxAge:1000 * 60 * 60 * 24 * 7, // equivale a todos os dias durante a semana
        httpOnly:true,
    }
})
app.use(sessionOptions)
app.use(flash())
app.use(csrf())
//nossos proprios MIDDLEWARES - funçoes intermediarias que trabalham com as routes(rotas)
app.use(middlewareGlobal)
app.use(checkCsrfError)
//app.use(outroMiddleware)
app.use(csrfMiddleware)
//chamar as rotas
app.use(routes)
//              conectar a base de dados primeiro que rodar o servidor
app.on('pronto',() => {

    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor rodando na porta 3000')
    }) // definir a porta do site // rodar o servidor = node server.js
})


