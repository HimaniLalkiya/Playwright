import { test, expect } from "@playwright/test";

test("practice", async ({ page }) => {

    //Navigate to url & Login with valid credentials ( check whether signout button is visible ) 
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("himanitest123@gmail.com");
    await page.locator("#userPassword").fill("Himanitest@123");
    await page.locator("#login").click();

    //assert signout button after login
    let signoutVal = await page.locator(".btn-custom").last();
    await expect(signoutVal).toBeVisible();

    //Add zara coat to the cart  ( check whether the confirmation message is visible )
    await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).locator(".fa-shopping-cart").click();
    let message = await page.locator("#toast-container");
    await expect(message).toBeVisible();

    //Navigate to the cart page 
    await page.locator(`button[routerlink="/dashboard/cart"]`).click();
    
    //Click on check out 
    await page.locator(".btn-primary").last().click();
    //or >> await page.locator(`li[class='totalRow'] button[type='button']`).click();

    //On the checkout page choose the expiry date 
    await page.locator(".ddl").first().selectOption("02");
    await page.locator(".ddl").last().selectOption("28");
    await page.waitForTimeout(3000);

    //Navigate to select country and Press sequentially india and choose the country india.
    await page.locator(`input[placeholder="Select Country"]`).pressSequentially("India");
    await page.locator(".ta-item").last().click();

})