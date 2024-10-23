/* eslint-disable @typescript-eslint/no-namespace*/
var MeuNamespace;
(function (MeuNamespace) {
    MeuNamespace.nomeDoNamespace = 'Tiago';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoa = new PessoaDoNamespace('Tiago');
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = ' Nome do outro namespace';
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
var PessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Tiago');
var constDoNamespace = 'Valor da const do namespace';
/*eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/module.ts"/>
// reference parecido a import
console.log(MeuNamespace.nomeDoNamespace);
console.log(constDoNamespace);
