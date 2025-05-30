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

  Scenario: Successfully removing an item from cart
  
    Given the user is on the login page
    And the user is on the item page
    When the user add item to the cart
    And the user in the item list
    When the user remove item to the cart
    Then item shouldn't be seen in the item page
![image](https://github.com/user-attachments/assets/8a4eefa6-08dd-41ce-bd63-366eb9f932f0)

  Scenario: Successfully sorting items by price(low to high)
  
    Given the user is on the login page
    And the user is on the item page
    When the user sorts items by price low to high
    Then items should be sorted by price low to high
![image](https://github.com/user-attachments/assets/3f2ab7ab-64a7-4ee1-ab20-d00d94f9a127)

