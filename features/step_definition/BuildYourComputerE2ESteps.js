const {Given, When, Then } = require('cucumber');
const { HomePage } = require('../../pages/cucumberPages/HomePage');
const { DesktopPage } = require("../../pages/cucumberPages/DesktopPage")
const {  BuildComputerPage } = require("../../pages/cucumberPages/BuildComputerPage")
const { GeneralPage } = require("../../pages/cucumberPages/GeneralPage");
const { CartPage } = require('../../pages/cucumberPages/CartPage');
const { LoginPage } = require('../../pages/cucumberPages/LoginPage');
const { CheckoutFormPage } = require('../../pages/cucumberPages/CheckoutFormPage');
const { CheckoutPage } = require('../../pages/cucumberPages/CheckoutPage');


const URL = "https://demo.nopcommerce.com/"

// Scenario: Go to the Build your own computer page Scenario
Given('The user is on the Home Page',async function () {
    await testController.navigateTo(URL)
   
  });

  Then('The user navigates to the Desktop page',async function () {
    await testController.hover(HomePage.ComputersNavLink())
    await testController.click(HomePage.DesktopNavLink())
  });

  When('The user selects the build your own computer option',async function () {
    await testController.click(DesktopPage.BuildYourOwnComputerTitle())
  });

  Then('The user is redirected to the build your own computer page',async function () {
    await testController.expect(BuildComputerPage.Title().exists).ok()
  });


// Scenario Outline: Build your own computer scenario

  Given('The user is on the build your own computer page',async function () {
    await testController.expect(BuildComputerPage.Title().exists).ok()
  });

  When('The user selects {string}, {string}, {string} and {string} && the software',async function (processor,ram,disk,os) {
    await testController.expect(BuildComputerPage.Title().exists).ok()
      
    await testController.click(BuildComputerPage.Processor())
    await testController.click(GeneralPage.ListOption().withText(processor))

    await testController.click(BuildComputerPage.Ram())
    await testController.click(GeneralPage.ListOption().withExactText(ram))
    
    await testController.click(BuildComputerPage.disk(disk))

    await testController.click(BuildComputerPage.OS(os))

    if(ram == "4GB [+$20.00]"){
    await testController.click(BuildComputerPage.AcrobatReader())
    await testController.click(BuildComputerPage.TotalCommander())
    
  }else{
      await testController.click(BuildComputerPage.MicrosoftOffice())
      await testController.click(BuildComputerPage.TotalCommander())
  }

});

  When('The user chooses the ammount of computers',async function () {
    await testController.selectText(GeneralPage.Quantity()).pressKey("delete")
    await testController.typeText(GeneralPage.Quantity(),"1")
  });

  
  Then('The user can see the {string} and add it to the shopping car',async function (price) {
    await testController.click(BuildComputerPage.AddToCartBtn())
    await testController.expect(GeneralPage.SuccessfullMessage().exists).ok()
    
  });

  //Scenario: Build your own computer shopping cart process scenario

  Given('The user is on the shoping cart page',async function () {
    await testController.click(HomePage.ShopingCartLink())
    await testController.expect(CartPage.Title().exists).ok()
  });
  
  When('The User accepts the terms of service',async function () {
    await testController.click(CartPage.TermsLabel())
  });

  When('The user clicks Checkout button',async function () {
    await testController.click(CartPage.CheckOutBtn())
  });

  
  Then('The user is redirected to the login page',async function () {
    await testController.expect(LoginPage.Title().exists).ok()
  });

  
//Scenario Outline: Checkout as a guest scenario

  Given('The user clicks on checkout as a guest',async function () {
    await testController.click(LoginPage.CheckoutGuestBtn())
  });


  When('The user completes {string}, {string},{string},{string},{string},{string}, {string} and {string}',async function (firstname, lastname, email, country, city, address, zipcode, phoneNumber) {
    await testController.typeText(CheckoutFormPage.Firstname(), firstname)
    await testController.typeText(CheckoutFormPage.Lastname(), lastname)
    await testController.typeText(CheckoutFormPage.Email(), email)
    await testController.click(CheckoutFormPage.Country())
    await testController.click(GeneralPage.ListOption().withExactText(country))
    await testController.typeText(CheckoutFormPage.City(), city)
    await testController.typeText(CheckoutFormPage.Address(), address)
    await testController.typeText(CheckoutFormPage.Zipcode(), zipcode)
    await testController.typeText(CheckoutFormPage.PhoneNumber(), phoneNumber)


  });

  When('the user clicks on continue button',async function () {
    await testController.click(CheckoutFormPage.ContinueBtn())
  });

  
  Then('The user is redirected to the checkout page',async function () {
    await testController.expect(CheckoutPage.Title().exists).ok()
  });


  //Scenario: Checkout process scenario

  Given('The user is on the checkout process',async function () {
    await testController.expect(CheckoutPage.Title().exists).ok()
  });

  When('The user chooses the shipping method',async function () {
    await testController.click(CheckoutPage.ShippingMethodContinueBtn())
  });

  When('The user chooses the payment method',async function () {
    await testController.click(CheckoutPage.PaymentMehotdContinueBtn())
  });

  When('the User accepts the payment information',async function () {
    await testController.click(CheckoutPage.PaymentInformationContinueBtn())
  });

  When('the user confirms the order',async function () {
    await testController.click(CheckoutPage.ConfirmOrderBtn())

  });

  Then('a thank you message is displayed.',async function () {
    await testController.expect(CheckoutPage.ThankYouTitle().exists).ok()
  });