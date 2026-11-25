
import { test, expect } from "@playwright/test";
//simple alert
test("simple alert @smoke", async ({ page }) => {

    page.on("dialog",(dialog)=>{
        dialog.accept();
    })
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button", {name:"Simple Alert"}).click();
    
})
//Confirmation alert
test("Confirmation alert @smoke", async ({ page }) => {

    page.on("dialog",(dialog)=>{
        dialog.dismiss();
    })
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button", {name:"Confirmation Alert"}).click();
    
})
//Prompt Alert
test("Prompt Alert @ regression", async ({ page }) => {

    page.on("dialog",(dialog)=>{
        dialog.accept("himani");
    })
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button", {name:"Prompt Alert"}).click();

    let Msg= await page.locator("#demo");
    await expect(Msg).toHaveText("Hello himani! How are you today?");
    
})