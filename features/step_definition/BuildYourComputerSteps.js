const {Given, When, Then } = require('cucumber');
const { BuildComputerPage } = require("../../pages/cucumberPages/BuildComputerPage")
const { GeneralPage } = require("../../pages/cucumberPages/GeneralPage")


const URL = "https://demo.nopcommerce.com/build-your-own-computer"


Given('The user is in the build your own computer page',async function () {
    await testController.navigateTo(URL)
  });

  When('The user selects {string}, {string}, {string} and {string} && software',async function (processor,ram,disk,os) {

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

  When('The user chooses the quantity',async function () {
      await testController.selectText(GeneralPage.Quantity()).pressKey("delete")
      await testController.typeText(GeneralPage.Quantity(),"2")
      await testController.takeElementScreenshot(GeneralPage.Quantity())
    
  });

  Then('The user can see the {string} and add it to the car', async function (price) {
    await testController.expect(GeneralPage.Price(price).exists).ok()
    await testController.takeElementScreenshot(GeneralPage.Price(price))
    await testController.click(BuildComputerPage.AddToCartBtn())
    await testController.expect(GeneralPage.SuccessfullMessage().exists).ok()
           
         });
  