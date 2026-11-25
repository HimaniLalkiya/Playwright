//child frames or i frames or inner frames or nested frames

import { test, expect } from "@playwright/test";

test("child page", async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://demo.automationtesting.in/Frames.html");

    await page.getByRole("link", {name:"Iframe with in an Iframe"}).click();

    let Mainframe = await page.frame({url:"https://demo.automationtesting.in/MultipleFrames.html"})

    let multiframe = await Mainframe.childFrames();

    let ch1= await multiframe[0];
    await ch1.getByRole("textbox").fill("himani");
   
})
