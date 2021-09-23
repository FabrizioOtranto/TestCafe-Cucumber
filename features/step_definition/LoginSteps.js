const {Given, When, Then } = require('cucumber');
const { LoginPage }  = require("../../pages/cucumberPages/LoginPage")
const { HomePage } = require("../../pages/cucumberPages/HomePage")
 

const URL = "https://demo.nopcommerce.com/login?returnUrl=%2F"


Given('The user opens the login page',async function () {
  await testController.navigateTo(URL)
});

When('The user enters valid {string} and {string}',async function (email,password) {
  await testController.typeText(LoginPage.Email(), email)
  await testController.typeText(LoginPage.Password(), password)
});


When('the user clicks login button',async function () {
  await testController.click(LoginPage.LoginButton())
});

Then('Homepage subtitle is displayed',async function () {
  await testController.expect(HomePage.SubTitle().exists).ok()
  await testController.takeElementScreenshot(HomePage.SubTitle())
});
