const express = require('express')
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

//rotas do home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

//rotas para contactos

route.get('/', contatoController.paginaInicial)

module.exports=route;