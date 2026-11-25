// Test case 1: Positive LogIn test
// Open page
// Type username student into Username field
// Type password Password123 into Password field
// Push Submit button
// Verify new page URL contains practicetestautomation.com/logged-in-successfully/
// Verify new page contains expected text ('Congratulations' or 'successfully logged in')
// Verify button Log out is displayed on the new page

import {test , expect} from "@playwright/test";
test("Test case 1: Positive LogIn test", async ({page}) => {

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("#username").fill("student");
    await page.locator("#password").fill("Password123");
    await page.locator("#submit").click();
    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/");

    let message = await page.locator(".post-title");
    await expect(message).toContainText("Successfully");

    let lgout = await page.locator(".wp-block-button__link");
    await expect(lgout).toBeVisible();
})

//assertions
//toHaveURL() --> to check whether the page or tab is having the given url or not 
//note --> the url has to be checked on tab level or page level not on element level 

//toContainText() --> it will check for the text given is present in the web element or not 
// will also work for partial text values or strings

//toBeVisible() --> it will check whether the given element in visible or not during the test 