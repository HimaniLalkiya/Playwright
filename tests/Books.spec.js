import { test, expect } from "@playwright/test";

let url = "https://demowebshop.tricentis.com/";
let email = "himanitest@gmail.com";
let pwd = "htest@123";

test("login1 @regression", async ({ page }) => {


    await page.goto(url);
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill(email);
    await page.locator("#Password").fill(pwd);
    await page.locator(".login-button").click();

    //select books
    await page.locator("a[href='/books']").first().click();


    await page.locator('h2 a[href="/health"]').click();

    await page.locator("#add-to-cart-button-22").click();


    let msg = await page.locator(".content");
    await expect(msg).toContainText("added");

    await page.locator("#topcartlink").click();
    //locator >> topcartlink a span.cart-label

    let cartVal = await page.locator(".page-title");
    await expect(cartVal).toHaveText("Shopping cart");


    await expect(page).toHaveURL("https://demowebshop.tricentis.com/cart");

    await page.locator("#CountryId").selectOption("India");
    await page.locator("#ZipPostalCode").fill("560037");

    await page.locator("#termsofservice").check();

    await page.locator("#checkout").click();

    let checkVal = await page.locator(".page-title");
    await expect(checkVal).toHaveText("Checkout");

    await expect(page).toHaveURL("https://demowebshop.tricentis.com/onepagecheckout");

})
