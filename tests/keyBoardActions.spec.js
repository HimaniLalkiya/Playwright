//register

import { test, expect } from "@playwright/test";

test("register", async ({ page }) => {


    await page.goto("https://demoqa.com/automation-practice-form");
    await page.getByPlaceholder('First Name').fill('himani');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(4000);


})
