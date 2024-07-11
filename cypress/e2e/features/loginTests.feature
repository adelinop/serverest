 Feature: Login Tests
   Feature to test Login Scenarios 

  Background: 
    Given I access the system
  @login @e2e
  Scenario Outline: Access User
    Given I access the system with "<typeUser>" user
    Then I should be redirected to the home page
  Examples: 
  |typeUser|
  | admin  |
  | user   |

  @creation @e2e
  Scenario Outline:  Sucessful user registration
    Given that I am on the registration page 
    When I enter a "<typeUserData>" name, email and password to create an "<type>" account
    Then I should see an "<typeUserData>" message
    

    Examples:
    |  type  | typeUserData       |
    | user  | error               |
    | admin | error               |
    | user  | confirmation        |
    | admin | confirmation        |
  

