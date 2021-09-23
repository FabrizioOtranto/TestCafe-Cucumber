import {ClientFunction, t} from 'testcafe'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import Eyes from '@applitools/eyes-testcafe';


const dataSet = require('../data/data.json')
const URL = "https://demo.nopcommerce.com/"
const getURL = ClientFunction(() => window.location.href)
const eyes = new Eyes();


fixture("Registration Fixture")
    .page(URL)
    .afterEach(async () => eyes.close())
    .after(async () => {
        // Wait and collect all test results
        // we pass false to this method to suppress the exception that is thrown if we
        // find visual differences
        let allTestResults = await eyes.waitForResults(false)
        // Print results
        console.log(allTestResults)
    });


dataSet.forEach(data => {
    var randonNumber = Math.floor(Math.random()*10000)
    var email = data.email+randonNumber+"@gmail.com"
test("User Registration and Login Test", async t =>{
    await eyes.open({
        t, // pass testcafe contorller
        appName: 'Demo App',
        testName: 'Registration E2E Test',
    });
    await t
    .click(HomePage.registerLink)
    .expect(getURL()).contains("register")
    await t
    .click(RegisterPage.maleOption)
    .typeText(RegisterPage.firstName,data.firstname)
    .typeText(RegisterPage.lastName,data.lastname)
    await RegisterPage.selectDay(data.birthday);
    await RegisterPage.selectMonth(data.birtmonth);
    await RegisterPage.selectYear(data.birthyear);
    await t
    .typeText(RegisterPage.email, email)
    .typeText(RegisterPage.password,data.password)
    .typeText(RegisterPage.confirmPassword,data.password)
    await eyes.checkWindow({
        tag: "Register Window",
        target: 'window',
        fully: true
    });
    
    await t
    .click(RegisterPage.RegisterButton)
    await eyes.checkWindow({
        tag: "Register message",
        target: 'window',
        fully: true
    });
    await t
    .expect(RegisterPage.successfullMessage.exists).ok()
    //logout
    .click(HomePage.logOutLink)
    //login
    .click(HomePage.loginLink)
    .expect(LoginPage.accountHeader.exists).ok()
    .typeText(LoginPage.emailInput,email)
    .typeText(LoginPage.passwordInput,data.password)
    await eyes.checkWindow({
        tag: "Login Window",
        target: 'window',
        fully: true
    });
    await t
    .click(LoginPage.submitButton())
    await eyes.checkWindow({
        tag: "Home Page",
        target: 'window',
        fully: true
    })

})});