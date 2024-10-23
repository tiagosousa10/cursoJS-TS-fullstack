const express = require('express')
const route = express.Router();
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

//rotas do home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

//rotas para contactos

route.get('/', contatoController.paginaInicial)

module.exports=route;