import { test, expect } from "@playwright/test";


test("login", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByPlaceholder("Enter Name").fill("Himani");
    await page.getByPlaceholder("Enter EMail").fill("himanitest@gmail.com");
    await page.getByPlaceholder("Enter Phone").fill("9406938988");
    await page.getByLabel("Address:").fill("xyz street");
    await page.getByLabel("Female").check();
    await page.getByLabel("Sunday").check();
    await page.getByLabel("Saturday").check();
    await page.getByLabel("Country").selectOption("India");
    await page.getByLabel("Colors:").selectOption("White");
    await page.getByLabel("Sorted List:").selectOption("Giraffe");

    await page.locator("#datepicker").fill("11/03/2026");
    await page.getByRole("link", { name: "15", exact: true }).click();
    await page.waitForTimeout(3000);
    
    
})