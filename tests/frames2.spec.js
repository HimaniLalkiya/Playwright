
import { test, expect } from "@playwright/test";

test("frames", async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");

    let frame1 = await page.frame({ url: "https://www.hyrtutorials.com/p/basic-controls.html" });
    await frame1.locator("#firstName").fill("Himani");
    await frame1.locator("#lastName").fill("test");
    await frame1.locator("#femalerb").check();
    await frame1.locator("#englishchbx").check();
    await frame1.locator("#hindichbx").check();
    await page.waitForTimeout(4000);
})

