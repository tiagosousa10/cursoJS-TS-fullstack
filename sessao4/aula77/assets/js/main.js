//validar cpf - ver video -- explicação

/* let cpf = "705.484.450-52";
let cpfLimpo = cpf.replace(/\D+/g, ""); //tudo o que nao for numero é substituido(expressao)s
cpfArray = Array.from(cpfLimpo); // transformar em array o cpf
console.log(cpfArray.map((ac, val) => ac + Number(val), 0));
 */
//###################################   FUNÇÃO CONSTRUTORA  ######################################
//###################################      Valida CPF   ######################################
function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    // //mostra o cpf sem pontos(.) e traços(-)
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}
//###################################   prototype   ######################################
//###################################   valida   ######################################
ValidaCPF.prototype.valida = function () {
  if (typeof cpfLimpo === "undefined") return false; // se o cpf for undefined retornar falso
  if (this.cpfLimpo.length !== 11) return false; // se o cpf nao tiver 11 carateres retornar falso
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;
  console.log(novoCpf);
  return novoCpf === cpfLimpo;
};
//###################################   prototype   ######################################
//################################     cria Digito   #########################################
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    console.log(regressivo, val, regressivo * val);
    ac += regressivo * Number(val);
    regressivo--;

    return ac;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito); // se o digito for maior que 9 retorna 0 senao retorna o digito
};

ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

//#########################################################################
const cpf = new ValidaCPF('705.484.450-52');
if(cpf.valida()){
  console.log('cpf Valido');
}else{
  console.log('cpf invalido')
}
