type VotationOption = {
  numberOfvotes: number;
  option: string;
};

//                    classe VOTAÇAO
export class Votation {
  // array para guardar as opçoes de voto
  //criar um atributo para receber o tipo + o array
  private _votationOptions: VotationOption[] = [];
  //receber o parametro de voto
  constructor(public details: string) {}

  //adicionar opcoes para as votacoes com o push()
  addVotationOptions(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  //Votar nas opçoes e adicionar numero de votos
  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfvotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

//                    classe AplicacaoVOTACAO
export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfvotes);
      }
      console.log('###');
      console.log(' ');
    }
  }
}

const votation1 = new Votation('Qual a sua linguagem favorita');
votation1.addVotationOptions({ option: 'Python', numberOfvotes: 0 });
votation1.addVotationOptions({ option: 'JavaScript', numberOfvotes: 0 });
votation1.addVotationOptions({ option: 'TypeScript', numberOfvotes: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(2);

const votation2 = new Votation('Qual a sua cor Favorita');
votation2.addVotationOptions({ option: 'Azul', numberOfvotes: 0 });
votation2.addVotationOptions({ option: 'Verde', numberOfvotes: 0 });
votation2.addVotationOptions({ option: 'Vermelho', numberOfvotes: 0 });
votation2.addVotationOptions({ option: 'qlQcoisa', numberOfvotes: 0 });

votation2.vote(2);
votation2.vote(1);
votation2.vote(0);
votation2.vote(3);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
