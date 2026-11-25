import { test, expect } from "@playwright/test";

test.describe("group1", () => {
    test("multiple select dropdown", async ({ page }) => {
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.getByLabel("Colors:").selectOption(["Red", "Yellow", "White"]);
        await page.getByLabel("Sorted List:").selectOption(["Giraffe", "Rabbit", "Zebra"]);
        await page.waitForTimeout(3000);
    })
    test("simple alert", async ({ page }) => {
        page.on("dialog", (dialog) => {
            dialog.accept();
        })
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.getByRole("button", { name: "Simple Alert" }).click();

    })
})

test.describe("group2", () => {
    test("drag and drop 1", async ({ page }) => {
        await page.goto("https://testautomationpractice.blogspot.com/");
        let element = await page.locator("#draggable");
        let source = await page.locator("#droppable");
        await element.dragTo(source);
        await page.waitForTimeout(5000);

    })
    test("doubleclick", async ({ page }) => {
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.locator('button[ondblclick="myFunction1()"]').dblclick();
        await page.waitForTimeout(5000);

        let field2 = await page.locator("#field2");
        await expect(field2).toHaveValue("Hello World!");
        await page.waitForTimeout(5000);

    })
})
