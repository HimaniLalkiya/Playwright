import { test, expect } from "@playwright/test";


test("multiple select dropdown @smoke", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.getByLabel("Colors:").selectOption(["Red", "Yellow", "White"]);
    await page.getByLabel("Sorted List:").selectOption(["Giraffe", "Rabbit", "Zebra"]);


    await page.waitForTimeout(3000);


})
test("simple alert @regression", async ({ page }) => {

    page.on("dialog",(dialog)=>{
        dialog.accept();
    })
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button", {name:"Simple Alert"}).click();
    
})