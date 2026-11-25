import { test, expect } from "@playwright/test";
test("Task1", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");


})
