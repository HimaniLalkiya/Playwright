
import { test, expect } from "@playwright/test";
//simple alert
test("shadow DOM @regression", async ({ page }) => {

    page.on("dialog",(dialog)=>{
        dialog.accept();
    })
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button", {name:"Choose File"}).last().setInputFiles("tests/Job_Description_JR0304384_Automation Testing (Selenium, Java, RestAPI).pdf");
    await page.waitForTimeout(5000);
})
