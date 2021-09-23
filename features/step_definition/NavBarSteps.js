const {Given, When, Then } = require('cucumber');
const { HomePage } = require('../../pages/cucumberPages/HomePage');
const {CameraAndPhotoPage } = require("../../pages/cucumberPages/CameraAndPhotoPage")


const URL = "https://demo.nopcommerce.com/"

Given('The user opens the homePage page',async function () {
    await testController.navigateTo(URL)
    
  });

  When('The selects the Camera and Photo link',async  function () {
      await testController.hover(HomePage.ElectronicsNavLink())
      await testController.click(HomePage.CameraAndPhotoNavLink())
 
  });

  Then('the Camera & Photo title is displayed',async  function () {
      await testController.expect(CameraAndPhotoPage.Title().exists).ok()
      await testController.takeElementScreenshot(CameraAndPhotoPage.Title())

  });