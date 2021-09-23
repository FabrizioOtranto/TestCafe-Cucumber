const {Given, When, Then } = require('cucumber');
const { RegisterPage } = require('../../pages/cucumberPages/RegisterPage');

const URL = "https://demo.nopcommerce.com/register"
var randonNumber = Math.floor(Math.random()*10000)

Given('The user opens the registration page', async function () {
  await testController.navigateTo(URL)
  });

  When('The user selects the {string}, {string}, {string},{string}, {string}, {string}, {string}, and {string}',async  function (gender, firstname, lastname, day, month, year, email, password) {
    if(gender == "male"){
      await testController.click(RegisterPage.MaleButton())
    }else{
      await testController.click(RegisterPage.FemaleButton())
    }
  
    await testController.typeText(RegisterPage.FirstName(), firstname)
    await testController.typeText(RegisterPage.LastName(), lastname)
    await testController.click(RegisterPage.DateOfBirth())
    await testController.click(RegisterPage.ListOption().withText(day))
    await testController.click(RegisterPage.DateOfMonth())
    await testController.click(RegisterPage.ListOption().withText(month))
    await testController.click(RegisterPage.DateOfYear())
    await testController.click(RegisterPage.ListOption().withText(year))
    await testController.typeText(RegisterPage.Email(), email + randonNumber + "@gmail.com")
    await testController.typeText(RegisterPage.Password(), password)
    await testController.typeText(RegisterPage.ConfirmPassword(), password)
    await testController.takeScreenshot()

  });

  When('the user clicks register button', async function () {
    await testController.click(RegisterPage.RegisterButton())
  });

  Then('successfull message is displayed', async function () {
    await testController.expect(RegisterPage.SuccessfullMessage().exists).ok()
    await testController.takeElementScreenshot(RegisterPage.SuccessfullMessage())

  });