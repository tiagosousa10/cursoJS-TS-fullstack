//classes abstratas -> não dá para criar uma instancia numa class abstrata
// do tipo "new Personagem", so com "extends Personagem" para gerar uma subclass
export abstract class Personagem {
  //classe ou tipo

  protected abstract emoji: string; // sempre que se cria algo abstrato na classe principal
  // é necessario redefinar em subclasses
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(
      `${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`,
    );
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}'; //UNICODE que gera emoji

  //tenho que criar sempre o metodo bordao por ser um metodo abstrato
  bordao(): void {
    console.log(this.emoji + 'GUERREIRA AO ATAQUEEEEE!!!!!!!!');
  }
}

export class Monstro extends Personagem {
  protected emoji = '\u{1F9Df}'; //UNICODE que gera emoji
  bordao(): void {
    console.log(this.emoji + 'MONSTRO AO ATAQUEEEEEEE');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
