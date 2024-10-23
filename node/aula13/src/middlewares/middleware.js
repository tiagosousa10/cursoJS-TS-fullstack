exports.middlewareGlobal = (req,res,next) => {


/* if(req.body.cliente){
    req.body.cliente = req.body.cliente.replace('Sousa','Não use Sousa')
    console.log()
    console.log(`vi q voce postou ${req.body.cliente}`)
    console.log()
}
 */

    next()
}
/* 
exports.outroMiddleware = (req,res,next) => {
    console.log('sou o OUTROmiddleware')
    next()
} */