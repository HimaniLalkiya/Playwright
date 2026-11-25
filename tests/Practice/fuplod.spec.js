import { test, expect } from "@playwright/test";


test("upload files", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("").setInputFiles("tests/Form_pdf_950502530310726.pdf");
    await page.locator("").setInputFiles("", "")

})