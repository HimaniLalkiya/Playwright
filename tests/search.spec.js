import { test, expect } from "@playwright/test";

let product=['Books','Computers','Jewelery','Gift Card']
let url = "https://demowebshop.tricentis.com/";
let email = "himanitest@gmail.com";
let pwd = "htest@123";

for(let item of product){
    test(`search for ${item} @smoke`, async ({ page }) => {
    await page.goto(url);
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill(email);
    await page.locator("#Password").fill(pwd);
    await page.locator(".login-button").click();
    await page.locator("#small-searchterms").fill(item);
    await page.getByRole("button",{name:"Search"}).click();
})
}
