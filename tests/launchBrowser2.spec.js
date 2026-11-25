//launch browser 



import { test, expect } from "@playwright/test";

test("launch browser 1 @regression", async({ browser }) => {

let context = await browser.newContext();
let page1 = await context.newPage();
let page2 = await context.newPage();

await page1.goto("https://demowebshop.tricentis.com/");
await page2.goto("https://www.flipkart.com/");


    await page1.waitForTimeout(5000); 
    })