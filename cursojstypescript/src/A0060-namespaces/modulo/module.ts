/* eslint-disable @typescript-eslint/no-namespace*/
namespace MeuNamespace {
  export const nomeDoNamespace = 'Tiago';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaDoNamespace('Tiago');

  export namespace OutroNamespace {
    export const nomeDoNamespace = ' Nome do outro namespace';
  }
}

const PessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Tiago');

const constDoNamespace = 'Valor da const do namespace';
