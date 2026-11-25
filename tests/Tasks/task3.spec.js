import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {


    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("himanitest@gmail.com");
    await page.locator("#Password").fill("htest@123");
    await page.waitForTimeout(3000);
    await page.locator(".login-button").click();


    let logoutButton = await page.locator(".ico-logout");
    await expect(logoutButton).toBeVisible();

})
