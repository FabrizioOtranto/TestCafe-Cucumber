import {Selector, t} from 'testcafe'

class CheckOutPage{
    constructor(){
        this.countryList = Selector("select[id='BillingNewAddress_CountryId']")
        this.cityTxt = Selector("input[id='BillingNewAddress_City']")
        this.addressTxt = Selector("input[id='BillingNewAddress_Address1']")
        this.zipCodeTxt = Selector("input[id='BillingNewAddress_ZipPostalCode']")
        this.phoneNumberTxt = Selector("input[id='BillingNewAddress_PhoneNumber']")
        this.continueBtn = Selector(".new-address-next-step-button")
        this.nextDayOption = Selector("input[id='shippingoption_1']")
        this.nextShippingBtn = Selector(".shipping-method-next-step-button")
        this.nextPaymentBtn = Selector(".payment-method-next-step-button")
        this.nextConfirmBtn = Selector(".payment-info-next-step-button")
        this.confirmOrderBtn = Selector(".confirm-order-next-step-button")
        this.orderConfirmationMessage = Selector('strong').withText('Your order has been successfully processed!')
        this.viewOrderDetailsLink= Selector("a").withText('Click here for order details.')
    }

    async selectCountry(country){
        const countryption = this.countryList.find('option')
        await t
        .click(this.countryList)
        .click(countryption.withExactText(country))

    }

}

export default new CheckOutPage()