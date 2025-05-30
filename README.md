**CUCUMBER - 71220865**

Scenario: Failed login with invalid credential

    Given the user is on the login page
    When the user enters an invalid username and password
    And the user clicks the login button
    Then the user should see a failed message
![image](https://github.com/user-attachments/assets/e4625f39-c7e4-4ac8-b905-fcd22a7d79e1)
