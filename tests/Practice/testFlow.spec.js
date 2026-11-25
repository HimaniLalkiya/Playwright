

import { test, expect } from "@playwright/test";

let url = "https://demowebshop.tricentis.com/";
let email = "himanitest@gmail.com";
let pwd = "htest@123";

test("Login to checkout flow practice", async ({ page }) => {
    await page.goto(url);

    //login
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill(email);
    await page.locator("#Password").fill(pwd);
    await page.locator(".login-button").click();

    //click on Apparel & Shoes link > ADD TO Cart unique find > asser message
    await page.locator('a[href="/apparel-shoes"]').first().click();
    await page.locator(".product-item").filter({ hasText: "Blue Jeans" }).locator(".product-box-add-to-cart-button").click();
    let contentMsg = await page.locator(".content");
    await expect(contentMsg).toContainText("The product has been added");

    //click on pagination  > click on other product title > select product option  in product detail page > add to cart > assert
    await page.locator(".next-page").click();
    await page.locator(`h2 a[href="/mens-wrinkle-free-long-sleeve"]`).click();
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/mens-wrinkle-free-long-sleeve");
    await page.locator("#product_attribute_10_7_36").selectOption("Medium");
    await page.locator("#add-to-cart-button-10").click();
    let contentMsg1 = await page.locator(".content");
    await expect(contentMsg1).toContainText("The product has been added");

    //click on shopping car link
    await page.locator("#topcartlink").click();

    //in cart > identify checkbox uniquely and remove item
    await page.locator(".cart-item-row").filter({ hasText: "Blue Jeans" }).locator(`input[type="checkbox"]`).check();

    //tick t&c > click on checkout
    await page.locator("#termsofservice").check();
    await page.locator("#checkout").click();

    //assert checkout billing page and content
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/onepagecheckout");
    let contentMsg3 = await page.locator(".page-title");
    await expect(contentMsg3).toHaveText("Checkout");














})