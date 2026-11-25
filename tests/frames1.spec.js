
import { test, expect } from "@playwright/test";
import { url } from "inspector";

// test("frame 1", async ({ browser }) => {

//     let context = await browser.newContext();
//     let page = await context.newPage();

//     await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");

//     let frame1 = await page.frame({ url: "https://www.hyrtutorials.com/p/frames-practice.html" });
//     let check = await frame1.locator(".post-title");
//     await expect(check).toHaveText("Frames Practice");
//     await page.waitForTimeout(4000);
// })


test("frame2", async ({browser})=>{
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
    
    let frame2 = await page.frame({url:"https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html"});
    
    await frame2.locator("#course").selectOption({ label: "Javascript" });
    //await page.waitForTimeout(4000);
})

