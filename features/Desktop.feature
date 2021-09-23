Feature: Desktop Page Feature

As an user i should see the available desktops, their prices and being able to add them to my car

Scenario Outline: Desktop Page Scenario
Given The user is on the Desktop Page
When The user see the available desktops and their prices
And The user adds the <product> to the car
Then The user sees a successfull message or is redirected depeding on the <product>

Examples:
    | product | 
    | 1 |
    | 2 | 
    | 0 |