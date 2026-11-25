//launch browser 



import { test, expect } from "@playwright/test";

test("chile page @smoke", async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://webdriveruniversity.com/index.html");

    let [childPage] = await Promise.all([context.waitForEvent('page'), page.getByRole("link", { name: "CONTACT US" }).click()])

    await childPage.locator(".contact_button").last().click();
    await childPage.waitForTimeout(4000);
})