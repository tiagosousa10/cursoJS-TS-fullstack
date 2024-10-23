//criar as funçoes para depois passar a referencia nas routes.js
exports.paginaInicial = (req,res) => {
res.send(
    `<form action="/" method="POST">
        Nome do cliente: <input type="text" name="nomeABC">
          outroCampo: <input type="text" name="outrocampo">
        <button>Enviar Formulário</button>
        </form>
    `)
}

exports.trataPost = (req,res) => {
    res.send('Ei, sou a nova rota de POST')
}