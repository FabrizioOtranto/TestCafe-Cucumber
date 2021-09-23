import {ClientFunction, t} from 'testcafe'
import HomePage from '../pages/E2EPages/HomePage'
import RegisterPage from '../pages/E2EPages/RegisterPage'
import LoginPage from '../pages/E2EPages/LoginPage'
import CustomerPage from '../pages/E2EPages/CustomerPage'

const dataSet = require('../data/RegisterData.json')
const URL = "https://demo.nopcommerce.com/"
const getURL = ClientFunction(() => window.location.href)


fixture("Registration and Login E2E Fixture")
    .page(URL)
    var randonNumber = Math.floor(Math.random()*10000)
    
test("Assert Home Page Test", async t =>{
    await t
        .expect(HomePage.subtitleHeader.exists).ok()
})

dataSet.forEach(data => {
    var email = data.email+randonNumber+"@gmail.com"
test("User Registration and Login E2E Test", async t =>{
    
    await t
    .click(HomePage.registerLink)
    .expect(getURL()).contains("register")
if(data.gender == "male"){
    await t.click(RegisterPage.maleOption)
}else{
    await t.click(RegisterPage.femaleOption)
}
    await t
    .typeText(RegisterPage.firstName,data.firstname)
    .typeText(RegisterPage.lastName,data.lastname)
    await RegisterPage.selectDay(data.birthday);
    await RegisterPage.selectMonth(data.birtmonth);
    await RegisterPage.selectYear(data.birthyear);

    await t
    .typeText(RegisterPage.email, email)
    .typeText(RegisterPage.password,data.password)
    .typeText(RegisterPage.confirmPassword,data.password)
    .click(RegisterPage.RegisterButton)
    .expect(RegisterPage.successfullMessage.exists).ok()

    //logout
    .click(HomePage.logOutLink)

    //login
    .click(HomePage.loginLink)
    .expect(LoginPage.accountHeader.exists).ok()
    .typeText(LoginPage.emailInput,email)
    .typeText(LoginPage.passwordInput,data.password)

    //go to my account
    .click(HomePage.myAccountLink)

    //check customer
    .expect(CustomerPage.ordersLink.exists).ok()
    .click(CustomerPage.ordersLink)
    .expect(CustomerPage.noOrdersLabel.exists).notOk()
    .takeScreenshot()



})});