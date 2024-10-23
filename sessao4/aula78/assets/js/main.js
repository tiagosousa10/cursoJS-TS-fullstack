//Superclass

//criar função Construtora
function Conta(agencia,conta,saldo){
  this.agencia= agencia;
  this.conta= conta;
  this.saldo= saldo

}
//          sacar
Conta.prototype.sacar = function(valor){
if(valor > this.saldo) {
  console.log(`Saldo Insuficiente: ${this.saldo}`)

  return
}
this.saldo-=valor;
}
Conta.prototype.depositar = function(valor){
  this.saldo += valor;
  this.verSaldo;
}
Conta.prototype.verSaldo = function(){
console.log(`Ag/c: ${this.agencia}/${this.conta}` + 
`Saldo: euros. ${this.saldo.toFixed(2)}`
)
}


function ContaCorrente(agencia,conta,saldo,limite){
  Conta.call(this, agencia,conta,saldo)
  this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente;

//          sacar
ContaCorrente.prototype.sacar = function(valor){
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo Insuficiente: ${this.saldo}`)
  
    return
  }
  this.saldo-=valor;
  this.verSaldo()
  }

  const cc = new ContaCorrente(11,22,0,100);
  cc.depositar(10)
  cc.sacar(5)
