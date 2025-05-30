import { expect, should } from "chai";
import { Builder, By, until } from "selenium-webdriver";
import { When, Then, Given, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(30000);

let driver;

Given("the user is on the login page", async function () {
  driver = new Builder().forBrowser("chrome").build();
  await driver.get("https://www.saucedemo.com/");
});

When("the user enters a valid username and password", async function () {
  await driver.findElement(By.id("user-name")).sendKeys("standard_user");
  await driver.findElement(By.id("password")).sendKeys("secret_sauce");
});

When("the user clicks the login button", async function () {
  await driver.findElement(By.id("login-button")).click();
});

Then("the user should see a success message", async function () {
  const message = await driver
    .wait(until.elementLocated(By.className("title")), 5000)
    .getText();
  expect(message).to.equal("Products");
  const item = await driver.findElement(By.id("item_4_img_link"));
  expect(item).to.exist;
  await driver.quit();
});
