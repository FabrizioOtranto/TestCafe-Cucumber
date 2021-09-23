import {Selector,t} from 'testcafe'

class CartPage{
    constructor(){
    this.termsLabel = Selector("input#termsofservice")
    this.cartTotal = Selector('id.cart-total-right')
    this.checkOutBtn = Selector("button#checkout")
    this.productPrice = Selector(".product-unit-price")
    this.productSubtotal = Selector(".product-subtotal")
    this.updateCart = Selector(".update-cart-button")
    this.productQuantity = Selector(".qty-input")

    }
}
export default new CartPage()