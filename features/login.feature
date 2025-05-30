Feature: User Login
  As a user
  I want to login using a valid email
  So that I can access the application

  Scenario: Successful login with valid details
    Given the user is on the login page
    When the user enters a valid username and password
    And the user clicks the login button
    Then the user should see a success message