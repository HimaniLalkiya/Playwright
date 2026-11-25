
import { test, expect } from "@playwright/test";
import { parseEnv } from "util";

let url = "https://automationexercise.com/";
let email = "himanitest123@gmail.com";
let password = "Himanitest@123";
test("Automation exercise", async ({ page }) => {

    //login with email, password > click login button
    await page.goto(url);

    //Verify that home page is visible successfully
    let homeVal = await page.getByRole("link", { name: "Home" });
    await expect(homeVal).toBeVisible();

    // Add products to cart
    await page.getByRole("link", { name: "Products" }).click();
    // Add products to cart
    await page.locator(".product-image-wrapper").filter({ hasText: "Blue Top" }).locator(".productinfo .add-to-cart").first().click();
    //. Click 'Cart' button
    await expect(page.getByText("Your product has been added to cart")).toBeVisible();

    await page.getByRole("link", { name: "View Cart", exact: true }).click();
    //Click Proceed To Checkout
    await page.locator(".check_out").click();
    //Click 'Register / Login' button
    await page.getByRole("link", { name: "Register / Login" }).click();

    await page.getByPlaceholder("Name").fill("playwright");
    await page.getByPlaceholder("Email Address").nth(1).fill("playwrightest123@gmail.com");
    await page.getByRole("button", { name: "Signup" }).click();

    //await page.waitForTimeout(3000);
    //await expect(page.locator("#password")).toBeVisible();
    await page.getByLabel("Password ").fill("Himanitest@123");
    await page.locator("#first_name").fill("playwright");
    await page.locator("#last_name").fill("test");
    await page.locator("#address1").fill("xyz street");
    await page.locator("#state").fill("karnataka");
    await page.locator("#city").fill("Bengaluru");
    await page.locator("#zipcode").fill("560003");
    await page.locator("#mobile_number").fill("9406938999");
    await page.locator(`button[type="submit"]`).first().click();

    //Verify 'ACCOUNT CREATED!' and click 'Continue' button
    let account = await page.locator(".text-center");
    await expect(account).toHaveText("Account Created!");
    await page.getByRole("link", { name: "Continue" }).click();

    //Verify ' Logged in as username' at top
    await expect(page.getByText("Logged in as playwright")).toBeVisible();

    //Click 'Cart' button
    await page.getByRole("link", { name: "Cart" }).click();

    //Click Proceed To Checkout
    await page.locator(".check_out").click();

    //Verify Address Details and Review Your Order
    let addDetails = await page.locator(".heading").first();
    await expect(addDetails).toHaveText("Address Details");

    let reviewDetails = await page.locator(".heading").last();
    await expect(reviewDetails).toHaveText("Review Your Order");

    // Enter description in comment text area and click 'Place Order'
    await page.locator(".form-control").fill("No comment as of now");
    await page.getByRole("link", { name: "Place Order" }).click();

    //Enter payment details: Name on Card, Card Number, CVC, Expiration date
    await page.locator('input[name="name_on_card"]').fill("usertest");
    await page.locator('input[name="card_number"]').fill("123456789123");
    await page.locator('input[name="cvc"]').fill("123");
    await page.locator('input[name="expiry_month"]').fill("08");
    await page.locator('input[name="expiry_year"]').fill("2030");

    // Click 'Pay and Confirm Order' button
    await page.getByRole("button", { name: "Pay and Confirm Order" }).click();

    //Verify success message 'Your order has been placed successfully!'
    // let successMsg = await page.locator("#success_message");
    // await expect(successMsg).toHaveText("Your order has been placed successfully!");
    await expect(page.getByText("Your order has been confirmed!")).toBeVisible();

    //Click 'Delete Account' button
    await page.getByRole("link", { name: "Delete Account" }).click();

    //Verify 'ACCOUNT DELETED!' and click 'Continue' button
    let delMsg = await page.locator(".text-center");
    await expect(delMsg).toHaveText("Account Deleted!");
    await page.getByRole("link", { name: "Continue" }).click();

}) 