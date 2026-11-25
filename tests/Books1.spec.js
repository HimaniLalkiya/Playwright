import { test, expect } from "@playwright/test";

test("login2 @smoke", async ({ page }) => {


    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("himanitest@gmail.com");
    await page.locator("#Password").fill("htest@123");
    await page.locator(".login-button").click();

    //select books
    await page.locator("a[href='/books']").first().click();

    //add health book to cart
    //using the mehtod of chaining locators to over come traditional way of using for and if statements
    //filter() is used to iterate through given elements and search for the given text by using hasText: value
    
    await page.locator(".product-item").filter({hasText:"Health Book"}).locator(".product-box-add-to-cart-button").click();

})