//criar as funçoes para depois passar a referencia nas routes.js
exports.paginaInicial = (req,res) => {
    console.log('respondendo ao cliente')
res.render('index')
return

}

exports.trataPost = (req,res) => {
    res.send(req.body)
    return
}