import { expect, should } from "chai";
import { Builder, By, until } from "selenium-webdriver";
import { When, Then, Given, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(30000);

let driver;

// Scenario: Successful login with valid details
// Given("the user is on the login page", async function () {
//   driver = new Builder().forBrowser("chrome").build();
//   await driver.get("https://www.saucedemo.com/");
// });

// When("the user enters a valid username and password", async function () {
//   await driver.findElement(By.id("user-name")).sendKeys("standard_user");
//   await driver.findElement(By.id("password")).sendKeys("secret_sauce");
// });

// When("the user clicks the login button", async function () {
//   await driver.findElement(By.id("login-button")).click();
// });

// Then("the user should see a success message", async function () {
//   const message = await driver
//     .wait(until.elementLocated(By.className("title")), 5000)
//     .getText();
//   expect(message).to.equal("Products");
//   const item = await driver.findElement(By.id("item_4_img_link"));
//   expect(item).to.exist;
//   await driver.quit();
// });

// Scenario: Failed login with invalid credential
// Given("the user is on the login page", async function () {
//   driver = new Builder().forBrowser("chrome").build();
//   await driver.get("https://www.saucedemo.com/");
// });

// When("the user enters an invalid username and password", async function () {
//   await driver.findElement(By.id("user-name")).sendKeys("testing");
//   await driver.findElement(By.id("password")).sendKeys("testing123");
// });

// When("the user clicks the login button", async function () {
//   await driver.findElement(By.id("login-button")).click();
// });

// Then("the user should see a failed message", async function () {
//   const item = await driver.findElement(By.className("error"));
//   expect(item).to.exist;
//   await driver.sleep(5000); 
//   await driver.quit();
// });

// Scenario: Successfully adding an item to cart
// Given("the user is on the login page", async function () {
//   driver = new Builder().forBrowser("chrome").build();
//   await driver.get("https://www.saucedemo.com/");
//   await driver.findElement(By.id("user-name")).sendKeys("standard_user");
//   await driver.findElement(By.id("password")).sendKeys("secret_sauce");
//   await driver.findElement(By.id("login-button")).click();
// });

// When("the user is on the item page", async function () {
//   const item = await driver.findElement(By.id("item_4_img_link"));
//   expect(item).to.exist;
//   await driver.findElement(By.id("item_4_img_link")).click();
// });

// When("the user add item to the cart", async function () {
//   const addButton = await driver.findElement(By.id("add-to-cart"));
//   await addButton.click();
// });

// When("the user in the item list", async function () {
//   const cartBadge = await driver.findElement(By.className("shopping_cart_badge"));
//   const badgeText = await cartBadge.getText();
//   expect(badgeText).to.equal("1");
//   await driver.findElement(By.id("shopping_cart_container")).click();
// });

// Then("item should be seen in the item page", async function () {
//   const message = await driver
//       .wait(until.elementLocated(By.className("inventory_item_name")), 5000)
//       .getText();
//       expect(message).to.equal("Sauce Labs Backpack");
//   await driver.sleep(5000); 
//   await driver.quit();
// });


// Scenario: Successfully removing an item from cart
// Given("the user is on the login page", async function () {
//   driver = new Builder().forBrowser("chrome").build();
//   await driver.get("https://www.saucedemo.com/");
//   await driver.findElement(By.id("user-name")).sendKeys("standard_user");
//   await driver.findElement(By.id("password")).sendKeys("secret_sauce");
//   await driver.findElement(By.id("login-button")).click();
// });

// When("the user is on the item page", async function () {
//   const item = await driver.findElement(By.id("item_4_img_link"));
//   expect(item).to.exist;
//   await driver.findElement(By.id("item_4_img_link")).click();
// });

// When("the user add item to the cart", async function () {
//   const addButton = await driver.findElement(By.id("add-to-cart"));
//   await addButton.click();
// });

// When("the user in the item list", async function () {
//   const cartBadge = await driver.findElement(By.className("shopping_cart_badge"));
//   const badgeText = await cartBadge.getText();
//   expect(badgeText).to.equal("1");
//   await driver.findElement(By.id("shopping_cart_container")).click();
//   await driver.sleep(2000); 
// });

// When("the user remove item to the cart", async function () {
//   const removeButton = await driver.findElement(By.id("remove-sauce-labs-backpack"));
//   await removeButton.click();
// });

// Then("item shouldn't be seen in the item page", async function () {
//   const item = await driver.findElements(By.id("item_4_img_link"));
//   expect(item).to.have.lengthOf(0);
//   await driver.sleep(5000); 
//   await driver.quit();
// });

// Scenario: Successfully sorting items by price(low to high)
// Given("the user is on the login page", async function () {
//   driver = new Builder().forBrowser("chrome").build();
//   await driver.get("https://www.saucedemo.com/");
//   await driver.findElement(By.id("user-name")).sendKeys("standard_user");
//   await driver.findElement(By.id("password")).sendKeys("secret_sauce");
//   await driver.findElement(By.id("login-button")).click();
// });

// When("the user is on the item page", async function () {
//   const item = await driver.findElement(By.id("item_4_img_link"));
//   expect(item).to.exist;
// });

// When("the user sorts items by price low to high", async function () {
//   const sortDropdown = await driver.findElement(By.className("product_sort_container"));
//   await sortDropdown.click();
//   const option = await driver.findElement(By.css('option[value="lohi"]'));
//   await option.click();
// });

// Then("items should be sorted by price low to high", async function () {
//     const item = await driver.findElement(By.id("item_2_img_link"));
//     expect(item).to.exist;
//     await driver.sleep(5000);
//     await driver.quit();
// });

// Scenario: Successfully logging out
Given("the user is on the login page", async function () {
  driver = new Builder().forBrowser("chrome").build();
  await driver.get("https://www.saucedemo.com/");
  await driver.findElement(By.id("user-name")).sendKeys("standard_user");
  await driver.findElement(By.id("password")).sendKeys("secret_sauce");
  await driver.findElement(By.id("login-button")).click();
});

When("the user is on the item page", async function () {
  const item = await driver.findElement(By.id("item_4_img_link"));
  expect(item).to.exist;
});

When("the user clicks on the slider menu", async function () {
  const menuButton = await driver.findElement(By.id("react-burger-menu-btn"));
  await menuButton.click();
  await driver.sleep(5000); 
});

When("the user clicks on the logout button", async function () {
  const logoutButton = await driver.findElement(By.id("logout_sidebar_link"));
  await logoutButton.click();
});

Then("the user should be redirected to the login page", async function () {
  const loginButton = await driver.wait(
    until.elementLocated(By.id("login-button")),
    3000 // waktu tunggu 3 detik
  );
  expect(loginButton).to.exist;
  await driver.sleep(5000); 
  await driver.quit();
});
