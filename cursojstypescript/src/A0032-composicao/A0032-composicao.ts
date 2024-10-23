export class Carro {
  public readonly motor = new Motor();
  ligar(): void {
    this.motor.ligar();
  }
  acelarar(): void {
    this.motor.acelarar();
  }
  parar(): void {
    this.motor.parar();
  }
  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado...');
  }
  acelarar(): void {
    console.log('Motor está acelarar...');
  }
  parar(): void {
    console.log('Motor está parado...');
  }
  desligar(): void {
    console.log('Motor está desligado...');
  }
}

const carro = new Carro();
carro.ligar();
carro.acelarar();
carro.parar();
carro.desligar();
