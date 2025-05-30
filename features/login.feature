Feature: User Login
  As a user
  I want to login using a valid email
  So that I can access the application

  # Scenario: Successful login with valid details
  #   Given the user is on the login page
  #   When the user enters a valid username and password
  #   And the user clicks the login button
  #   Then the user should see a success message

  # Scenario: Failed login with invalid credential
  #   Given the user is on the login page
  #   When the user enters an invalid username and password
  #   And the user clicks the login button
  #   Then the user should see a failed message

  # Scenario: Successfully adding an item to cart
  #   Given the user is on the login page
  #   And the user is on the item page
  #   When the user add item to the cart
  #   And the user in the item list 
  #   Then item should be seen in the item page

  # Scenario: Successfully removing an item from cart
  #   Given the user is on the login page
  #   And the user is on the item page
  #   When the user add item to the cart
  #   And the user in the item list
  #   When the user remove item to the cart
  #   Then item shouldn't be seen in the item page

  # Scenario: Successfully sorting items by price(low to high)
  #   Given the user is on the login page
  #   And the user is on the item page
  #   When the user sorts items by price low to high
  #   Then items should be sorted by price low to high

  Scenario: Successfully logging out
    Given the user is on the login page
    And the user is on the item page
    When the user clicks on the slider menu
    And the user clicks on the logout button
    Then the user should be redirected to the login page
