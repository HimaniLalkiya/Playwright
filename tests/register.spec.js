//register

import { test, expect } from "@playwright/test";

test("register @smoke", async ({ page }) => {


    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-register").click();
    await page.locator("#gender-female").check();
    await page.locator("#FirstName").fill("htest");
    await page.locator("#LastName").fill("register");
    await page.locator("#Email").fill("hregister123@gmail.com");
    await page.locator("#Password").fill("Hregister@123");
    await page.locator("#ConfirmPassword").fill("Hregister@123");
    await page.waitForTimeout(3000);
    await page.locator("#register-button").click();

    await page.locator(".register-continue-button").click();

    let lgout = await page.locator(".ico-logout");
    await expect(lgout).toHaveText("Log out");

})
