/* const mod1 = require('./mod1'); // importar o ficheiro
const falaNome = mod1.falaNome;
console.log(falaNome()) */

/* 
const {nome,sobrenome, falaNome} = require ('./mod1');
console.log(nome,sobrenome) */
const path= require('path');
const axios = require('axios')
const {Pessoa} = require ('./mod1');

const pessoa1 = new Pessoa ('Joao')

console.log(pessoa1)