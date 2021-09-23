Feature: Registration Feature

    As a visitor I can create a new account by the registration Feature

Scenario Outline: : New User Registration Scenario
Given The user opens the registration page
When The user selects the "<gender>", "<firstname>", "<lastname>","<day>", "<month>", "<year>", "<email>", and "<password>"
And the user clicks register button
Then successfull message is displayed
Examples:
    | gender | firstname | lastname | email | password | day | month | year |
    | male | Fabrizio | Otranto | testing | testing | 31 | October | 1995 | 
    | female | Luciana | Algisi | tester | testing | 1 | February | 1998 |