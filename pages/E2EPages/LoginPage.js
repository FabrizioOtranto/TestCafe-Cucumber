import {Selector, t} from 'testcafe'

class LoginPage{
    constructor(){
    this.emailInput = Selector("#Email")
    this.passwordInput = Selector("#Password")
    this.submitButton = Selector(".login-button")
    this.accountHeader = Selector("strong").withText("Returning Customer")
}
}
export default new LoginPage();