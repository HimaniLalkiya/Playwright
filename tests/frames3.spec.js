import { test, expect } from "@playwright/test";

test("chile page", async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://vinothqaacademy.com/iframe/");

   //frameLocator
    let frame3=await page.frameLocator("iframe[title='Registration Form']");
    await frame3.locator("#vfb-5").fill("Himani");
    await frame3.locator("#vfb-7").fill("Test");

    await frame3.getByLabel("Female").check();
    await frame3.getByLabel("Functional Testing").check();
    await frame3.locator("#vfb-14").fill("test123@gmail.com");

    await frame3.getByLabel("Date of Demo").click();
    await frame3.locator(".ui-state-default").filter({hasText:"13"}).click()
   
    
    await frame3.locator("#vfb-3").fill("28");
    await frame3.locator("#vfb-4").click();
    //await frame3.waitForTimeout(4000);
   
})