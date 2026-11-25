import { test, expect } from "@playwright/test";


test("upload files @regression", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#singleFileInput").setInputFiles("tests/QA_Automation_Engineer_Capgemini_Interview_Prep.pdf");

    await page.locator("#multipleFilesInput").setInputFiles(["tests/Form_pdf_950502530310726.pdf", "tests/Job_Description_JR0304384_Automation Testing (Selenium, Java, RestAPI).pdf"]);

    await page.waitForTimeout(3000);


})