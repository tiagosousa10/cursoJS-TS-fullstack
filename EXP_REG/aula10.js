//  regex101.com - testar expressoes regulares
// consultar regex para Emails, passwords, etc 

// Encontra todas as palavras
const palavrasRegEX=/([\wÀ-ú]+)/g

//não numeros
const naoNumerosRegEx = /\D/

//Valida IP
const ipRegExp = /^((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9\d]|\d)(\.)){3}/g

// Valida CPF
const cpfRegExp = /(?:\d{3}\.){2}\d{3}\-\d{2}/g 

//Valida Telefones 
const validaTelefone= /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g

//valida SenhasFortes
//const validaSenhasFortes= //



