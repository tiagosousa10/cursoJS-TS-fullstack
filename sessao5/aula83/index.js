function teste(){
    console.log('este e meu teste')
}

class ControloRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste()
  }
  //            metodo de instancia
  aumentaVolume() {
    this.volume += 2;
  }
  //            metodo de instancia
  diminuiVolume() {
    this.volume -= 2;
  }
  //            metodo estatico
  static trocaPilha() {
    console.log("Ok ! Vou Trocar!");
  }
  static soma(x,y){
    return x+y
  }
}

//              metodo de instancia
const controlo1 = new ControloRemoto("LG");
controlo1.aumentaVolume();
controlo1.aumentaVolume();
controlo1.aumentaVolume();
controlo1.aumentaVolume();
console.log(controlo1);

//          metodo estatico
ControloRemoto.trocaPilha();
//console.log(Math.random(1,5))
console.log(ControloRemoto.soma(5,3))
