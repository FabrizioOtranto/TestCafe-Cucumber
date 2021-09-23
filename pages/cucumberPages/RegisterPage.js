const {Selector} = require('testcafe')

function select (selector){
    return Selector(selector).with({boundTestRun:testController})
}

exports.RegisterPage ={
    MaleButton: function(){
        return select('#gender-male')
    },

    FemaleButton: function(){
        return select('#gender-female')
    },

    FirstName: function(){
        return select('#FirstName')
    },

    LastName: function(){
        return select("#LastName")
    },

    DateOfBirth: function(){
        return select("select[name='DateOfBirthDay']")
    },

    DateOfMonth: function(){
        return select("select[name='DateOfBirthMonth']")
    },

    DateOfYear: function(){
        return select("select[name='DateOfBirthYear']")
    },

    Email: function(){
        return select("#Email")
    },

    Password: function(){
        return select("#Password")
    },

    ConfirmPassword: function(){
        return select("#ConfirmPassword")
    },

    RegisterButton: function(){
        return select("#register-button.button-1.register-next-step-button")
    },

    SuccessfullMessage: function(){
        return select("div.result").withText("Your registration completed")
    },

    ListOption: function(){
        return select('option')
    }
    
}

