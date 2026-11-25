
import { test, expect } from "@playwright/test";
import { parseEnv } from "util";

let url = "https://automationexercise.com/";
let email = "himanitest123@gmail.com";
let password = "Himanitest@123";
test("Automation exercise", async ({ page }) => {

    //login with email, password > click login button
    await page.goto(url);
    await page.getByRole("link", { name: " Signup / Login" }).click();
    await page.getByPlaceholder("Email Address").first().fill(email);
    await page.getByPlaceholder("Password").fill(password);
    await page.getByRole("button", { name: "Login" }).click();

    //assert logout link after login
    let logotVal = await page.getByRole("link", { name: "Logout" });
    await expect(logotVal).toBeVisible();

    //add to cart product uniquely
    // await page.locator(".product-image-wrapper").filter({hasText:"Half Sleeves Top Schiffli Detailing - Pink"}).locator(".productinfo .add-to-cart").click();
    
    
    //click on womens link > saree
    await page.getByRole("link",{name:"Women"}).click();
    await page.getByRole("link",{name:"Saree"}).click();
    await page.locator(".product-image-wrapper").filter({hasText:"Rust Red Linen Saree"}).locator(".productinfo .add-to-cart").first().click();

    await page.getByRole("button",{name:"Continue Shopping"}).click();

    await page.locator(".product-image-wrapper").filter({hasText:"Cotton Silk Hand Block Print Saree"}).getByRole("link",{name:"View Product"}).first().click();
    
    await expect(page.getByText("Cotton Silk Hand Block Print")).toBeVisible();
    
    await page.getByRole("button",{name:"Add to cart"}).click();
})