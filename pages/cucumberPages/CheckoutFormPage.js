const {Selector} = require('testcafe')

function select (selector){
    return Selector(selector).with({boundTestRun:testController})
}

exports.CheckoutFormPage = {

    Firstname: function(){
        return select("#BillingNewAddress_FirstName")
    },

    Lastname: function(){
        return select("#BillingNewAddress_LastName")
    },

    Email: function(){
        return select("#BillingNewAddress_Email")
    },

    Country: function(){
        return select("#BillingNewAddress_CountryId")
    },

    City: function(){
        return select("#BillingNewAddress_City")
    },

    Address: function(){
        return select("#BillingNewAddress_Address1")
    },

    Zipcode: function(){
        return select("#BillingNewAddress_ZipPostalCode")
    },

    PhoneNumber: function(){
        return select("#BillingNewAddress_PhoneNumber")
    },

   ContinueBtn: function(){
       return select(".new-address-next-step-button")
   }
}

