Feature: Login Feature

    As a visitor I can create a new account by the registration Feature

Scenario Outline: : Returning Customer Log In Scenario 
Given The user opens the login page
When The user enters valid "<email>" and "<password>"
And the user clicks login button
Then Homepage subtitle is displayed
Examples:
    | email | password | 
    | testing@gmail.com | testing |