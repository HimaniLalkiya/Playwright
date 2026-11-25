
import { test, expect } from "@playwright/test";

let url = "https://rahulshettyacademy.com/client/#/auth/login";
let email = "himanitest123@gmail.com";
let pwd = "Himanitest@123";
test("Test", async ({ page }) => {
    await page.goto(url);
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill(pwd);
    await page.locator("#login").click();

    let signout = await page.locator(".btn-custom").last();
    await expect(signout).toBeVisible();

    await page.locator(".card").filter({hasText:"ZARA COAT 3"}).locator(".fa-shopping-cart").click();

    let toastermsg = await page.locator("#toast-container");
    await expect(toastermsg).toBeVisible();

    await page.locator('button[routerlink="/dashboard/cart"]').click();

    await page.locator(".btn-primary").last().click();

    await page.locator(".ddl").first().selectOption("02");
    await page.locator(".ddl").last().selectOption("28");

    await page.locator('input[placeholder="Select Country"]').pressSequentially("India");
    await page.locator(".ta-item").last().click();

})