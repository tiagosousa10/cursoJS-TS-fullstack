import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};
afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName,lastName and cpf', () => {
    const sut = createIndividualCustomer('Tiago', 'Sousa', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'Tiago');
    expect(sut).toHaveProperty('lastName', 'Sousa');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('Tiago', 'Sousa', '111.111.111-11');
    expect(sut.getName()).toBe('Tiago Sousa');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Coca-cola', '123.444');
    expect(sut).toHaveProperty('name', 'Coca-cola');
    expect(sut).toHaveProperty('cnpj', '123.444');
  });

  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('Udemy', '333.444');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('333.444');
  });
});
