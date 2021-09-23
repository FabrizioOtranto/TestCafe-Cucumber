import {Selector,t} from 'testcafe'

class ProductDetailPage{
    constructor(){
        this.productPrice = Selector("#price-value-4").withText("1,800.00")
        this.productQuantity = Selector("input#product_enteredQuantity_4")
        this.addToCar = Selector("#add-to-cart-button-4")
        this.succesMessage = Selector('div.bar-notification.success')
        

    }
}

export default new ProductDetailPage()