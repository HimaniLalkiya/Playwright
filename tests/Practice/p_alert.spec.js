
import { test, expect } from "@playwright/test";

test("test1", async ({ page }) => {

    page.on("dialog", (dialog) => {
        dialog.accept();
    })
    await page.goto("https://demoqa.com/alerts");
    await page.locator("#alertButton").click();

})

test("test2", async ({ page }) => {

    page.on("dialog", (dialog) => {
        dialog.dismiss();
    })
    await page.goto("https://demoqa.com/alerts");
    await page.locator("#timerAlertButton").click();
    await page.waitForTimeout(5000);

})
test("test3", async ({ page }) => {

    page.on("dialog", (dialog) => {
        dialog.dismiss();
    })
    await page.goto("https://demoqa.com/alerts");
    await page.locator("#confirmButton").click();
})
test("test4", async ({ page }) => {

    page.on("dialog", (dialog) => {
        dialog.accept("hello");
    })
    await page.goto("https://demoqa.com/alerts");
    await page.locator("#promtButton").click();
})
