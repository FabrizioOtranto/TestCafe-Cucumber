const {Selector} = require('testcafe')

function select (selector){
    return Selector(selector).with({boundTestRun:testController})
}

exports.DesktopPage = {

    BuildYourOwnComputerTitle: function(){
        return select("a").withText("Build your own computer")
    },

    DigitalStormTitle: function(){
        return select('a').withText("Digital Storm VANQUISH 3 Custom Performance PC")
    },

    LenovoTitle: function(){
        return select('a').withText("Digital Storm VANQUISH 3 Custom Performance PC")
    },

    BuildPrice: function(){
        return select(".actual-price").nth(0).withText("1,200.00")
    },

    DigitalPrice: function(){
        return select(".actual-price").nth(1).withText("$1,259.00")
    
    },

    LenovoPrice: function(){
        return select(".actual-price").nth(2).withText("$500.00")
    
    },

    AddToCarBtn: function(product){
        return select(".product-box-add-to-cart-button").nth(product)
    },


}