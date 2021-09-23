const {Given, When, Then } = require('cucumber');
const { BuildComputerPage } = require('../../pages/cucumberPages/BuildComputerPage');
const { DesktopPage } = require('../../pages/cucumberPages/DesktopPage');
const { GeneralPage } = require('../../pages/cucumberPages/GeneralPage');

const URL = "https://demo.nopcommerce.com/desktops"


Given('The user is on the Desktop Page',async function () {
    await testController.navigateTo(URL)

  });

  
  When('The user see the available desktops and their prices',async function () {
      await testController.expect(DesktopPage.BuildYourOwnComputerTitle().exists).ok()
      await testController.expect(DesktopPage.BuildPrice().exists).ok()

      await testController.expect(DesktopPage.DigitalStormTitle().exists).ok()
      await testController.expect(DesktopPage.DigitalPrice().exists).ok()

      await testController.expect(DesktopPage.LenovoTitle().exists).ok()
      await testController.expect(DesktopPage.LenovoPrice().exists).ok()
      await testController.takeScreenshot()

  });

  When('The user adds the {int} to the car',async function (product) {
    await testController.click(DesktopPage.AddToCarBtn(product))
  });

  Then('The user sees a successfull message or is redirected depeding on the {int}',async function (product) {
    if(product == 0){
      await testController.expect(BuildComputerPage.Title().exists).ok()
      await testController.takeElementScreenshot(BuildComputerPage.Title())
    }else{
      await testController.expect(GeneralPage.SuccessfullMessage().exists).ok()
      await testController.takeElementScreenshot(GeneralPage.SuccessfullMessage())
    }

  });