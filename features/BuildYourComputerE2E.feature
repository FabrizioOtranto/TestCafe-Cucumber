Feature: Build Your Own Computer End to End Feature

As a visitor I can build my own computer and follow the process to pay for it. 


Scenario: Go to the Build your own computer page Scenario
Given The user is on the Home Page
When The user navigates to the Desktop page
And The user selects the build your own computer option
Then The user is redirected to the build your own computer page

Scenario Outline: Build your ownn computer scenario

Given The user is on the build your own computer page
When The user selects "<processor>", "<ram>", "<disk>" and "<os>" && the software
And The user chooses the ammount of computers
Then The user can see the "<price>" and add it to the shopping car

Examples: 
|processor | ram | disk | os | price | 
|2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] |7|9|$1,460.00|


Scenario: Build your own computer shopping cart process scenario

Given The user is on the shoping cart page
When The User accepts the terms of service
And  The user clicks Checkout button 
Then The user is redirected to the login page


Scenario Outline: Checkout as a guest scenario
Given The user clicks on checkout as a guest
When The user completes "<firstname>", "<lastname>","<email>","<country>","<city>","<address>", "<zipcode>" and "<phoneNumber>"
And the user clicks on continue button
Then The user is redirected to the checkout page

Examples:
    | firstname | lastname | email | country | city | address | zipcode | phoneNumber |
    | Fabrizio | Otranto | tester@gmail.com | Argentina | Buenos Aires | Hot Dog Street | 200329 | 11329833443 |
    

Scenario: Checkout process scenario
Given The user is on the checkout process
When The user chooses the shipping method
And The user chooses the payment method
And the User accepts the payment information 
And the user confirms the order
Then a thank you message is displayed.