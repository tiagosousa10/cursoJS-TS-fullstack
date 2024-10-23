//tipo Record
const objeto1: Record<string, string | number> = {
  nome: 'tiago',
  sobrenome: 'teste',
  idade: 30,
};

console.log(objeto1);

type PessoaProtocol = {
  nome: string;
  sobrenome?: string;
  idade?: number;
};

//Required = tudo o q é opcional torna-se não opcional
type PessoaRequired = Required<PessoaProtocol>;

//Partial = torna tudo opcional
type PessoaPartial = Partial<PessoaRequired>;

//readonly
type PessoaReadonly = Readonly<PessoaReadonly>;

//Pick
type PessoaPick = Pick<PessoaProtocol, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'tiago',
  sobrenome: 'teste',
  idade: 30,
};
console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>; // devolve o que está no 1grupo mas nao tem no 2grupo
type TipoExtract = Extract<ABC, CDE>; // devolve o que estiver em "IGUAL" nos 2 grupos

// Receber os dados diretos da base dados
type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};
//O formato que quero
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

//criar um objeto
const accountMongo: AccountMongo = {
  _id: 'wadwadwat213215',
  nome: 'Tiago',
  idade: 21,
};
//      Mapear/Formatar o "_id" de modo a formata-lo sem o "_" (id)
function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API: ');
console.log(accountApi);

// Module mode
export default 1;
