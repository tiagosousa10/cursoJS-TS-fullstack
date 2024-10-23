class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado) {
      console.log("dispositivo já ligado");
      return;
    }
    this.ligado = true;
  }
  desligar() {
    if (!this.ligado) {
      console.log(this.nome + "já desligado");
      return;
    }
    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  //herança de classes
  constructor(nome, cor, modelo) {
    super(nome), // chamar o construtor da classe PAI (dispostivoEletronico)
      (this.cor = cor); // declarar cor pois nao tem na classe PAI
    this.modelo = modelo;
  }
}
// nao fizer hierarquias muito grandes (extends) devido a possiveis bugs

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }
  ligar(){
    console.log('Olha, vc alterou o metodo ligar')
  }
  falaOi(){
    console.log('falaaaaaOIIIIIII')
  }
  contaUmMaisUm(a,b){
    this.a = a;
    this.b = b;
    let c;
    c = b+a;
    return c
  }
}

const s1 = new Smartphone("Samsung", "Preto", "Galaxy S10");
s1.ligar();
console.log(s1);
s1.modelo = "Qlq Coisa";
s1.cor = "Azul";
s1.desligar();
console.log(s1);


const t1 = new Tablet('Apple',true)
console.log(t1)
t1.ligar() // a primeira vez vai ao tablet e depois vai a classe principal(PAI) logo tenho que ligar 2x
//para que seja possivel
t1.ligar()
t1.contaUmMaisUm(10,20)
console.log(t1)