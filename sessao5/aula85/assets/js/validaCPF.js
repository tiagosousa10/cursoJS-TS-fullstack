class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  éSequência() {
    return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.lenght); //vai repetir o caracterer na posicao (0) por todos
  }
  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = this.geraDigito(cpfSemDigitos);
    const digito2 = this.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2
  }

  geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.lenght + 1;

    for (let stringNumerica of cpfSemDigitos) {
      //   console.log(stringNumerica, reverso);
      total += reverso * Number(stringNumerica);
      reverso--;
    }
    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
    console.log(total);
  }

  valida() {
    if (!this.cpfLimpo) return false; //senao existir cpflimpo retorna falso
    if (typeof cpfLimpo !== "string") return false; // se for diferente de string retornar falso
    if (this.cpfLimpo.lenght !== 11) false; // se nao tiver 11 caracteres retorna falso
    if (this.éSequência()) return false; // se for uma sequencia retorna falso
    this.geraNovoCpf()
    return this.novoCPF === this.cpfLimpo
  }
}

/* const validacpf = new ValidaCPF("070.987.231-03");
const validacpf1 = new ValidaCPF("999.999.999-99");
console.log(validacpf.valida());

if(validacpf.valida()){
  console.log('CPF valido com sucesso')
}else{
  console.log('CPF sem sucesso') */
//}