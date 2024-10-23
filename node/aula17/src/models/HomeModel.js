//pasta models - refere-se a tudo que seja dados/ base de dados
const mongoose = require('mongoose')

//construir o schema para depois nos Controllers colocar a informaçao
const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: String,
    nome: String

})

const HomeModel = mongoose.model('Home', HomeSchema)

class Home{

}

module.exports=Home;