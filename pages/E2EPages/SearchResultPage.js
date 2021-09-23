import {Selector, t} from 'testcafe'

class SearchResultPage{
    constructor(){
        this.productItem = Selector('div.product-item')
        this.productTitle = Selector('a').withText('Apple MacBook Pro 13-inch')
        this.checkout = Selector(".button-2.product-box-add-to-cart-button")
    }
}
export default new SearchResultPage()