import { ClientFunction, Selector} from "testcafe";
import HomePage from "../pages/E2EPages/HomePage";
import RegisterPage from "../pages/E2EPages/RegisterPage";
import CartPage from "../pages/E2EPages/CartPage";
import CheckOutPage from "../pages/E2EPages/CheckOutPage";
import ProductDetailPage from "../pages/E2EPages/ProductDetailPage";
import SearchResultPage from "../pages/E2EPages/SearchResultPage";
import MyOrderPage from "../pages/E2EPages/MyOrderPage";


const URL = "https://demo.nopcommerce.com/"
const getURL = ClientFunction(() => window.location.href)

fixture("E2E Buy somthing Fixture")
    .page(URL);

    const dataSet = require('../data/BuySomethingData.json')
    var randonNumber = Math.floor(Math.random()*10000)

    test("Assert Home Page Test", async t =>{

        await t
            .expect(HomePage.subtitleHeader.exists).ok()
    })

    dataSet.forEach(data => {
        var email = data.email+randonNumber+"@gmail.com"
    test("Place Order E2E Tests", async(t) => {
        await t
        .maximizeWindow()
        .click(HomePage.registerLink)
    .expect(getURL()).contains("register")
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
    .click(RegisterPage.RegisterButton)
    .expect(RegisterPage.successfullMessage.exists).ok();
    await HomePage.search(data.search);
    //search result
    await t
    .click(SearchResultPage.checkout)
    

    // cart and checkout

    if(data.search =="Apple MacBook Pro 13-inch"){
        await t.click(ProductDetailPage.addToCar)
        }

    await t
    .wait(3000)
    .click(HomePage.shoppingCartLink)
    .selectText(CartPage.productQuantity).pressKey("delete")
    .typeText(CartPage.productQuantity, data.productQuantity)
    .click(CartPage.updateCart)
    .expect(CartPage.productPrice.withText(data.price).exists).ok()
    .expect(CartPage.productSubtotal.withText(data.subtotal).exists).ok()
    .click(CartPage.termsLabel)
    .click(CartPage.checkOutBtn)
    .expect(getURL()).contains('checkout');

    //place order
    await CheckOutPage.selectCountry(data.country);
    await t
    .typeText(CheckOutPage.cityTxt,data.city)
    .typeText(CheckOutPage.addressTxt,data.address)
    .typeText(CheckOutPage.zipCodeTxt, data.ZipCode)
    .typeText(CheckOutPage.phoneNumberTxt, data.phoneNumber)
    .click(CheckOutPage.continueBtn)
    .click(CheckOutPage.nextDayOption)
    .click(CheckOutPage.nextShippingBtn)
    .click(CheckOutPage.nextPaymentBtn)
    .click(CheckOutPage.nextConfirmBtn)
    .click(CheckOutPage.confirmOrderBtn)
    .expect(CheckOutPage.orderConfirmationMessage.exists).ok()
    .click(CheckOutPage.viewOrderDetailsLink)
    .expect(MyOrderPage.total.withText(data.subtotal).exists).ok()
    .takeScreenshot()
    .scroll(0,750)
    .takeScreenshot()
    //My Account
    .click(HomePage.myAccountLink)
            
    })
    })

    test("Change Currency Test", async(t) =>{
        await HomePage.changeCurrency('Euro')
    })

