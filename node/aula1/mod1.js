/* const nome = 'Tiago'
const sobrenome = 'Sousa'

const falaNome = () => nome + ' ' + sobrenome */
    
//console.log(module)

/* module.exports.nome= nome;
module.exports.sobrenome=sobrenome;
module.exports.falaNome=falaNome; */

/* exports.nome=nome;
exports.sobrenome=sobrenome;
exports.falaNome=falaNome;
this.qualquerCoisa='O que eu quiser'
console.log(exports) */


class Pessoa {
    constructor(nome){
        this.nome=nome;
    }
}

const nome= 'Tiago';
const sobrenome = 'Sousa'

module.exports = {
    nome,sobrenome,Pessoa
}

exports.outraCoisa= 'OutraCoisa'
exports.maisUma = 'dadwda'

/* module.exports.nome = 'Tiago'
exports.Pessoa= Pessoa
this.sobrenome='Qlq coisa' */