/* import qlqCoisa from './modulo1' // default 
console.log(qlqCoisa) //importar o default utilizado na funçao soma */

import Pessoa, { nome,sobrenome } from './modulo1'
const p1 = new Pessoa(nome,sobrenome)

/* import {soma} from './modulo1'
console.log(soma(5,5), sobrenome) */


/* import * as MeuModulo from './modulo1'
console.log(MeuModulo)
 */
/* import { nome , sobrenome , idade, soma, Pessoa as OutraCoisa} from "./modulo1";
//          renomear 'as'
 const p1 = new OutraCoisa('Tiago','Sousa')
 console.log(p1)
console.log(nome, sobrenome, idade)
console.log(soma(5,5)) */