import { test, expect } from "@playwright/test";

test("doubleclick @regression", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('button[ondblclick="myFunction1()"]').dblclick();
    await page.waitForTimeout(5000);

    let field2 = await page.locator("#field2");
    await expect(field2).toHaveValue("Hello World!");
    await page.waitForTimeout(5000);

})

// /toHaveText()--to validate the text displayed inside an HTML element, such as <p>, <div>, <h1>, or <button>.
//toHaveValue()--to validate the current value of a form field, such as an <input> or <textarea>.