import {Selector, t} from 'testcafe'

class HomePage{
    constructor(){
        this.subtitleHeader = Selector("h2").withExactText("Welcome to our store")
        this.registerLink = Selector(".ico-register")
        this.loginLink = Selector(".ico-login")
        this.shoppingCartLink = Selector('a').withText('Shopping cart')
        this.wishListLink = Selector('a').withText('Wishlist')
        this.currencyList = Selector("select#customerCurrency")
        this.myAccountLink = Selector('a').withText('My account')
        this.logOutLink = Selector('.ico-logout')
        
    }
    get productSearch(){
        return Selector("input[id='small-searchterms']");
    }

    async search(product){
        await t 
            .typeText(this.productSearch,product)
            .wait(3000)
            .pressKey('enter')
    }

    async changeCurrency(currency){ 
        const currencyOption = this.currencyList.find('option')
        await t
        .click(this.currencyList)
        .click(currencyOption.withExactText(currency))

    }

}

export default new HomePage();