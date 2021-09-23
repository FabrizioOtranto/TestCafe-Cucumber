const {Selector} = require('testcafe')

function select (selector){
    return Selector(selector).with({boundTestRun:testController})
}

exports.GeneralPage = {

AddToCarBtn: function(){
    return select(".button-2.product-box-add-to-cart-button")
},

ComparisonBtn: function(){
    return select(".add-to-compare-list-button")
},

WishlistBtn: function(){
    return select("button-2.add-to-wishlist-button")
},

Price: function(price){
    return select("#price-value-1").withText(price)
},

Quantity: function(){
    return select("input.qty-input")
},

ListOption: function(){
    return select('option')
},

SuccessfullMessage: function(){
    return select("p").withText("The product has been added to your ")
}
}