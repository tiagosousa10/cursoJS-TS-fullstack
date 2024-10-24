import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties NAME and PRICE', () => {
    const sut = createSut('Camisola', 49.9);
    expect(sut).toHaveProperty('name', 'Camisola');
    expect(sut.price).toBeCloseTo(49.9);
  });
});
