import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {


    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("himanitest@gmail.com");
    await page.locator("#Password").fill("htest@1234");
    await page.waitForTimeout(3000);
    await page.locator(".login-button").click();

    let errMessage = await page.locator(".validation-summary-errors");
    await expect(errMessage).toContainText("The credentials provided are incorrect");
    
})