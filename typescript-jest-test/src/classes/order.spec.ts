import { CartItem } from "./interfaces/cart-item";
import { CustomerOrder } from "./interfaces/customer-protocol";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { PersistencyProtocol } from "./interfaces/persistency-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { Order } from "./order";
import { ShoppingCart } from "./shopping-cart";


class ShoppingCartMock implements ShoppingCartProtocol{
 get items(): Readonly<CartItem[]>{
    return[]
  }
  addItem(item: CartItem): void{
  }
  removeItem(index: number): void{}
  total(): number{return 1}
  totalWithDicount(): number{ return 2}
  isEmpty(): boolean{ return false}
  clear(): void {}
}

class MessagingMock implements MessagingProtocol{
  sendMessage() {
  }
}

class PersistencyMock implements PersistencyProtocol{
  saveOrder() {
  }
}

class CustomerMock implements CustomerOrder{
  getName() {
    return ''
  }
  getIDN(){
    return ''
  }
}

const createSut = ( ) => {
  const shoppingCartMock = new ShoppingCartMock()
  const messagingMock = new MessagingMock()
  const persistencyMock = new PersistencyMock()
  const customerMock = new CustomerMock()



}

describe('Order', () => {
  it('should not checkout if cart is empty'){
    const order = new Order


  }
})
