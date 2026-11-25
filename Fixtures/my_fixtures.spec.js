// import { test, expect } from "@playwright/test";
// const { test : expect} = require("@playwright/test");
import { test as Base } from "@playwright/test";
//const { test: Base } = "@playwright/test";

export const test = Base.extend({
    webPage: async ({ page }, use) => {
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator(".ico-login").click();
        await page.locator("#Email").fill("himanitest@gmail.com");
        await page.locator("#Password").fill("htest@123");
        await page.locator(".login-button").click();
        await use(page);
        await console.log('Test completed');    //tear down for cleanup
    }
})

