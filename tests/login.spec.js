//login 
//locate the element on the website 
//1. css locator 
//2. playwright loactors 

//css locators 
//id 
//#id_value --> #Email
//class 
//.class_value --> .ico-login
//tag_name + attribute + value 

//click() --> it is used to click on the given element 
//type() --> it is used to type or fill the given value or string 
//fill() --> it is used to type or fill the given value or string(rec)

import { test, expect } from "@playwright/test";

test("login @smoke", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator(".ico-login").click();
    await page.locator("#Email").fill("himanitest@gmail.com");
    await page.locator("#Password").fill("htest@123");
    await page.waitForTimeout(3000);
    await page.locator(".login-button").click();

    //assertion
    //store the element
    let lgout = await page.locator(".ico-logout");
    await expect(lgout).toHaveText("Log out");
    

})
