import { test, expect } from "@playwright/test";

let context;
let page;

test.beforeEach(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("himanitest@gmail.com");
    await page.locator("#Password").fill("htest@123");
    await page.locator(".login-button").click();

})

test("books @smoke", async () => {
    //select books
    await page.locator("a[href='/books']").first().click();
    await page.locator('h2 a[href="/health"]').click();
    await page.locator("#add-to-cart-button-22").click();
    let msg = await page.locator(".content");
    await expect(msg).toContainText("added");


})

test("shopping cart @smoke", async () => {

    await page.locator("#topcartlink").click();

    let cartVal = await page.locator(".page-title");
    await expect(cartVal).toHaveText("Shopping cart");
    await page.locator("#CountryId").selectOption("India");
    await page.locator("#ZipPostalCode").fill("560037");

    await page.locator("#termsofservice").check();

    await page.locator("#checkout").click();

    let checkVal = await page.locator(".page-title");
    await expect(checkVal).toHaveText("Checkout");

    await expect(page).toHaveURL("https://demowebshop.tricentis.com/onepagecheckout");

})
test.afterEach("logout @regression", async()=>{
    await page.getByRole("link", {name:"Log out"}).click();
})
