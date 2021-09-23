import {Selector, t} from 'testcafe'

class RegisterPage{
    constructor(){
        this.maleOption = Selector('#gender-male')
        this.femaleOption = Selector('#gender-female')
        this.firstName = Selector('#FirstName')
        this.lastName = Selector('#LastName')
        this.dateOfBirthDayList = Selector("select[name='DateOfBirthDay']")
        this.dateOfBirthMothList = Selector("select[name='DateOfBirthMonth']")
        this.dateOfBirthYearList = Selector("select[name='DateOfBirthYear']")
        this.email = Selector("#Email")
        this.password = Selector("#Password")
        this.confirmPassword = Selector("#ConfirmPassword")
        this.RegisterButton = Selector("#register-button.button-1.register-next-step-button")
        this.successfullMessage = Selector("div.result").withText("Your registration completed")
    }

    async selectDay(day){
        const dayOption = this.dateOfBirthDayList.find('option')
        await t
        .click(this.dateOfBirthDayList)
        .click(dayOption.withExactText(day))

    }

    async selectMonth(month){ 
        const monthOption = this.dateOfBirthMothList.find('option')
        await t
        .click(this.dateOfBirthMothList)
        .click(monthOption.withExactText(month))

    }

    async selectYear(year){
        const yearOption = this.dateOfBirthYearList.find('option')
        await t
        .click(this.dateOfBirthYearList)
        .click(yearOption.withExactText(year))

    }
}

export default new RegisterPage()