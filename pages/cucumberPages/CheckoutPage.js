const {Selector} = require('testcafe')

function select (selector){
    return Selector(selector).with({boundTestRun:testController})
}

exports.CheckoutPage = {

    Title: function(){
    return select("h1").withText("Checkout")
},

    ShippingMethodContinueBtn: function(){
        return select(".shipping-method-next-step-button")

    },

    PaymentMehotdContinueBtn: function(){
        return select(".payment-method-next-step-button")
    },

    PaymentInformationContinueBtn: function(){
        return select(".payment-info-next-step-button")
    },

    ConfirmOrderBtn: function(){
        return select(".confirm-order-next-step-button")
    },

    OrderDetailBtn: function(){
        return select("a").withText("Click here for order details.")
    },

    ThankYouTitle: function(){
        return select("h1").withText("Thank you")
    }

}

