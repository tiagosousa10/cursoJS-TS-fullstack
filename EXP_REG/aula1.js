// g - global (encontra todas as ocorrencias)
// i - insensitive ()
// (()()) - grupos
// | ou

const {texto} = require('./base')

const regExp1 = /(maria|joão|luiz)(, hoje sua exposa)/i;
const found = regExp1.exec(texto);


if(!null || found){
    console.log(found);
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
}
