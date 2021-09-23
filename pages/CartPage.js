import {Selector,t} from 'testcafe'

class CartPage{
    constructor(){
    this.termsLabel = Selector("input#termsofservice")
    this.cartTotal = Selector('id.cart-total-right')
    this.checkOutBtn = Selector("button#checkout")

    }
}
export default new CartPage()