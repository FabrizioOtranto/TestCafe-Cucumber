const {Selector} = require('testcafe')

function select (selector){
    return Selector(selector).with({boundTestRun:testController})
}

exports.BuildComputerPage = {
    Title: function(){
        return select ("h1").withText("Build your own computer")
    },

    Processor: function(){
        return select("select[name='product_attribute_1']")
    },
    
    Ram: function(){
        return select("select[name='product_attribute_2']")
    },

    disk: function(disk){
        return select(`input[id='product_attribute_3_${disk}']`)
    },



    OS: function(os){
        return select(`#product_attribute_4_${os}`)
    },





    MicrosoftOffice: function(){
        return select("input[id='product_attribute_5_10']")
    },

    AcrobatReader: function(){
        return select("input[id='product_attribute_5_11']")
    },

    TotalCommander: function(){
        return select("input[id='product_attribute_5_12']")
    },

    AddToCartBtn: function(){
        return select("#add-to-cart-button-1")
    },

}