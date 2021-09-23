import {Selector, t} from 'testcafe'

class CustomerPage{
    constructor(){
        this.ordersLink = Selector('a').withExactText("Orders")
        this.noOrdersLabel = Selector("div.no-data").withExactText("No orders")
    }

}
export default new CustomerPage()
