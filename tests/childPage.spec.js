//launch browser 



import { test, expect } from "@playwright/test";

test("chile page @smoke", async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    let [childPage] = await Promise.all([context.waitForEvent('page'), page.getByRole("link", { name: "OrangeHRM, Inc" }).click()])

    await childPage.getByRole("button", { name: "Contact Sales" }).first().click();
    await childPage.waitForTimeout(4000);
})