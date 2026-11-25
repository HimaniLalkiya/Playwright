import { test, expect } from "@playwright/test";

// test("basic frame", async ({ browser }) => {

//     let context = await browser.newContext();
//     let page = await context.newPage();

//     await page.goto("https://qaplayground.com/practice/iframes");

//     let frame1= page.frameLocator(`[data-testid="iframe-basic"]`);
//     await frame1.getByPlaceholder("Enter your name").fill("himani");
//     await frame1.getByRole("button",{name:"Submit"}).click();

//     let checkMsg= page.locator(".success");
//     await expect(checkMsg).toHaveText("Hello,himani!")
// })
// test("basic frame 3", async ({ browser }) => {

//     let context = await browser.newContext();
//     let page = await context.newPage();

//     await page.goto("https://qaplayground.com/practice/iframes");

//     let frame1 = page.frameLocator(`[data-testid="iframe-frame-1"]`);
//     await frame1.getByRole("button", { name: "Click Me" }).click();
//     await page.waitForTimeout(5000);

//     let frame2 = page.frameLocator(`iframe[name="frame-two"]`);
//     await frame2.getByRole("button", { name: "Activate" }).click();

//     let frame3 =page.frameLocator(`iframe[title="Frame Three"]`);
//     await frame3.getByRole("button", {name:"Confirm Action"}).click();
// })

test("basic frame 4", async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://qaplayground.com/practice/iframes");

    let frame1 = page.frameLocator(`[data-testid="iframe-outer"]`);
    let frame2 = frame1.frameLocator(`iframe[title="Inner Frame"]`);
    await frame2.getByPlaceholder("Enter secret code").fill("dfgfhf");
    await frame2.getByRole(("button"), {name:"Unlock"}).click();
   
})
