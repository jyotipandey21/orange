@sprint
Feature: As a user I want to login a
 objectspy so that valid user can login 
 Scenario: Valid users should be able to login 
 Given I am on objectspy
 When  I enter Username and Password
 And click on signin button
Then I must see dashboardpage Page

