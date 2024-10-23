//criar as funçoes para depois passar a referencia nas routes.js
/* const HomeModel = require('../models/HomeModel') */
//find, create, etc
/* HomeModel.find({
    titulo: 'Um titulo de testes',
    descricao: 'Uma descriçao d etestes',
    nome:'mais umTeste'
})
.then(dados => console.log(dados))
.catch(e=> console.log(e))
 */
exports.paginaInicial = (req,res) => {
  //            mostrar as informaçoes nas sessoes
   console.log(req.flash('error', req.flash('info', req.flash('success'))))
res.render('index')
return

}

exports.trataPost = (req,res) => {
    res.send(req.body)
    return
}

