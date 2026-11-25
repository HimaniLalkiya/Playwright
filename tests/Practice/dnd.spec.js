import {test, expect} from "@playwright/test";

test("practice drag n drop", async({page})=>{
    await page.goto("https://webdriveruniversity.com/Actions/index.html");

    let source = await page.locator("#draggable");
    let dest= await page.locator("#droppable"); 

    await source.dragTo(dest);
})