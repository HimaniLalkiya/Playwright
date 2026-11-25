import { test, expect } from "@playwright/test";


test("login", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByRole("link", { name: "Log in" }).click();
    await page.getByLabel("Email:").fill("himanitest@gmail.com");
    await page.getByLabel("Password:").fill("htest@123");
    await page.getByRole("button", { name: "Log in" }).click();

    //assertion
    //store the element
    let lgout = await page.getByRole("link", { name: "Log out" });
    await expect(lgout).toBeVisible()

    //books
    await page.getByRole("link", { name: "Books" }).first().click();
    await page.locator(".product-item").filter({ hasText: "Health Book" }).getByRole("button", { name: "Add to cart" }).click();

    let message1 = await page.getByText("The product has been added to your ");
    await expect(message1).toBeVisible();

    let displayMessage = await page.getByText("The product has been added to your ").textContent();
    console.log(displayMessage);

    
})
