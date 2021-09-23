Feature: Build Your Own Computer

As a visitor I can build my own computer

Scenario Outline: Build your own computer scenario

Given The user is in the build your own computer page
When The user selects "<processor>", "<ram>", "<disk>" and "<os>" && software
And The user chooses the quantity
Then The user can see the "<price>" and add it to the car

Examples: 
|processor | ram | disk | os | price | 
|2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] |7|9|$1,460.00|
|2.2 GHz Intel Pentium Dual-Core E2200 | 8GB [+$60.00] |6|8|$1,315.00|