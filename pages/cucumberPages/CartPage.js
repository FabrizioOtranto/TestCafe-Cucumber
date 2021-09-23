const {Selector} = require('testcafe')

function select (selector){
    return Selector(selector).with({boundTestRun:testController})
}

exports.CartPage = {

    Title: function(){
        return select("h1").withText("Shopping cart")
    },

    TermsLabel: function(){
        return select("#termsofservice")
    },

    CheckOutBtn: function(){
        return select("#checkout")

    },
}

