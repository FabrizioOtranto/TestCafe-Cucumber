import { ClientFunction, Selector} from "testcafe";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import CartPage from "../pages/CartPage";
import CheckOutPage from "../pages/CheckOutPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import SearchResultPage from "../pages/SearchResultPage";


const URL = "https://demo.nopcommerce.com/"
const getURL = ClientFunction(() => window.location.href)

fixture("E2E Registration Fixture")
    .page(URL);
    var randonNumber = Math.floor(Math.random()*10000)
    const email = 'Testing'+randonNumber+"@gmail.com"
    const password  = 'testing123'

    test("Assert Home Page Test", async t =>{

        await t
            .expect(HomePage.subtitleHeader.exists).ok()
    })

    test("Place Order E2E Tests", async(t) => {
        await t
        .maximizeWindow()
        .click(HomePage.registerLink)
    .expect(getURL()).contains("register")
    .click(RegisterPage.maleOption)
    .typeText(RegisterPage.firstName,"Fabrizio")
    .typeText(RegisterPage.lastName,"Otranto")
    await RegisterPage.selectDay("31");
    await RegisterPage.selectMonth("October");
    await RegisterPage.selectYear("1995");
    await t
    .typeText(RegisterPage.email, email)
    .typeText(RegisterPage.password,password)
    .typeText(RegisterPage.confirmPassword,password)
    .click(RegisterPage.RegisterButton)
    .expect(RegisterPage.successfullMessage.exists).ok();
    await HomePage.search('Apple MacBook Pro 13-inch');
    //search result
    await t
    .click(SearchResultPage.checkout)
    //product
    .expect(ProductDetailPage.productPrice.exists).ok()
    .selectText(ProductDetailPage.productQuantity).pressKey("delete")
    .typeText(ProductDetailPage.productQuantity,"3")
    .click(ProductDetailPage.addToCar)
    .expect(ProductDetailPage.succesMessage.exists).ok()
    .wait(3000)
    // cart and checkout
    .click(HomePage.shoppingCartLink)
    .click(CartPage.termsLabel)
    .click(CartPage.checkOutBtn)
    .expect(getURL()).contains('checkout');

    //place order
    await CheckOutPage.selectCountry("Argentina");
    await t
    .typeText(CheckOutPage.cityTxt,"Buenos Aires")
    .typeText(CheckOutPage.addressTxt,"The moon 202")
    .typeText(CheckOutPage.zipCodeTxt,"101")
    .typeText(CheckOutPage.phoneNumberTxt,"20002002")
    .click(CheckOutPage.continueBtn)
    .click(CheckOutPage.nextDayOption)
    .click(CheckOutPage.nextShippingBtn)
    .click(CheckOutPage.nextPaymentBtn)
    .click(CheckOutPage.nextConfirmBtn)
    .click(CheckOutPage.confirmOrderBtn)
    .expect(CheckOutPage.orderConfirmationMessage.exists).ok()
    .click(CheckOutPage.viewOrderDetailsLink)
    //My Account
    .click(HomePage.myAccountLink)
        
    })

    test("Change Currency Test", async(t) =>{
        await HomePage.changeCurrency('Euro')
    })

