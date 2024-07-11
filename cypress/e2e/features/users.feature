 Feature: User Tests
   Feature to test Login Scenarios 

  Background: 
    Given I access the system

  @users @e2e
  Scenario Outline: List registered users
    Given I access the system with "<typeUser>" user
    When navigate to the user list page 
    Then I should see a list of registered users
  Examples:
  |typeUser|
  |  admin |
 

