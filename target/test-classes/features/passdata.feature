@data
Feature: As a user I want to login a
 objectspy so that valid user can login  
 Scenario Outline: Valid users should be able to login 
 Given I am on objectspy
 When  I enter "<username>" and "<password>"
 And I click on signin button
Then I must see dashboard Page display
Examples:
|username|password|
|jyotipan21@gmail.com|bhagwan21|