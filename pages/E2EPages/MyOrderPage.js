import {Selector, t} from 'testcafe'

class MyOrderPage{
    constructor(){

        this.total = Selector("strong")
        this.subtitle = Selector("h1").withText("Order information")

    }
}
export default new MyOrderPage()