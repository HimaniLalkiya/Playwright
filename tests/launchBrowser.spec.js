//launch browser for single tab project

//fixtures -->pre defined env.
//inbuilt fixtures - 1. browser fixtures  2. Page fixtures


import { test, expect } from "@playwright/test";

test("launch browser 1 @smoke", async({ page }) => {

//test > allow us to write tests
//async > allow us to write the expected results(asserations)

    await page.goto("https://demowebshop.tricentis.com/");

    //page > opens a incognito browser/ browser context + tab(page)
    //no cookies or sessions or details stored
    //test is written

    await page.waitForTimeout(5000); 
})
//--headed > will run the test in headed mode(visible mode)