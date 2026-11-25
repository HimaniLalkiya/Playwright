// Test case 2: Negative username test
// Open page
// Type username incorrectUser into Username field
// Type password Password123 into Password field
// Push Submit button
// Verify error message is displayed
// Verify error message text is Your username is invalid!

import { test, expect } from "@playwright/test";

test("Test case 2: Negative username test", async ({ page }) => {

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("studentt");
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();

    let error = await page.locator("#error");
    await expect(error).toBeVisible();

    let errorMessage = await page.locator("#error");
    await expect(errorMessage).toHaveText("Your username is invalid!");

})