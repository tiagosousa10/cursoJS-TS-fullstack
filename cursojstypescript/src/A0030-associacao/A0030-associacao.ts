//                -----Escritor-----
export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  //                    METODOS
  get nome(): string {
    return this._nome;
  }

  // setFerramenta
  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }
  //getFerramenta
  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  //metodo para escrever
  escrever(): void {
    if (this._ferramenta === null) {
      console.log('Não posso escrever sem ferramenta...');
    }
  }
}

//              -----Ferramenta-----
export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}
//          Caneta -> Ferramenta
export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo`);
  }
}

//          MaquinaEscrever -> Ferramenta
export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando`);
  }
}

const escritor = new Escritor('Tiago');
const caneta = new Caneta('Bic');
const maquinaEscrever = new MaquinaEscrever('Maquina');

escritor.ferramenta = caneta;
escritor.ferramenta = maquinaEscrever;
escritor.ferramenta = null;

console.log(escritor.ferramenta);
escritor.escrever();
