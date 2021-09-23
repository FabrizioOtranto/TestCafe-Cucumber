const {Selector} = require('testcafe')

function select (selector){
    return Selector(selector).with({boundTestRun:testController})
}

exports.LoginPage = {
    Email: function(){
        return select("#Email")
    },

    Password: function(){
        return select("#Password")
    },
    
    LoginButton: function(){
        return select(".button-1.login-button")
    },

    Title: function(){
        return select("strong").withText('Returning Customer')
    },

    CheckoutGuestBtn: function(){
        return select(".checkout-as-guest-button")
    }
}