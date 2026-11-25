import { test, expect } from "@playwright/test";

test("login @regression", async ({ page }) => {


    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("himanitest@gmail.com");
    await page.locator("#Password").fill("htest@123");
    await page.locator(".login-button").click();

    //select books
    await page.locator("a[href='/books']").first().click();
    await page.waitForTimeout(3000);

    //select dropdown
    await page.locator("#products-orderby").selectOption("Price: High to Low");
    await page.locator("#products-pagesize").selectOption("12");
    await page.locator("#products-viewmode").selectOption("List");


})
