// Test case 3: Negative password test
// Open page
// Type username student into Username field
// Type password incorrectPassword into Password field
// Push Submit button
// Verify error message is displayed
// Verify error message text is Your password is invalid!

import { test, expect } from "@playwright/test";

test("Test case 3: Negative password test", async ({ page }) => {

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("Password1233");
    await page.locator("#submit").click();

    let error = await page.locator("#error");
    await expect(error).toBeVisible();

    let errorMessage = await page.locator("#error");
    await expect(errorMessage).toHaveText("Your password is invalid!")
})