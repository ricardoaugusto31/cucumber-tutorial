**CUCUMBER - 71220865**

Scenario: Failed login with invalid credential

    Given the user is on the login page
    When the user enters an invalid username and password
    And the user clicks the login button
    Then the user should see a failed message
![image](https://github.com/user-attachments/assets/e4625f39-c7e4-4ac8-b905-fcd22a7d79e1)

  Scenario: Successfully adding an item to cart
  
    Given the user is on the login page
    And the user is on the item page
    When the user add item to the cart
    And the user in the item list 
    Then item should be seen in the item page
![image](https://github.com/user-attachments/assets/63531b25-424f-449f-9e8a-192faef1997f)
