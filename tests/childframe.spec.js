import { test, expect } from "@playwright/test";

test("practice child page @regression", async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://app.thetestingacademy.com/playwright/frames/nested-iframes");

    let frame1 = page.frameLocator('#pact1');

    let frame2 = frame1.frameLocator('#pact2');

    let frame3 = frame2.frameLocator('#pact3');

    await frame3.locator("#glaf").fill("testing");
   
    

})