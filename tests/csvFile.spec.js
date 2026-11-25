//ddt using csv file 
import { test, expect } from "@playwright/test";

import fs from "fs";
import { parse } from "csv-parse/sync";

//step1 - store the path
let csvPath = 'tests/testData/data.csv';

//step 2-read file
let data = fs.readFileSync(csvPath, 'utf-8');

let records = parse(data, { columns: true, skip_empty_lines: true })
let url = "https://demowebshop.tricentis.com/";

for (let loginData of records) {
    test(`login for user ${loginData.email} @regression`, async ({ page }) => {
        await page.goto(url);
        await page.locator(".ico-login").click();
        await page.locator("#Email").fill(loginData.email);
        await page.locator("#Password").fill(loginData.password);
        await page.locator(".login-button").click();

        let logout = await page.getByRole('link', { name: 'Log out' });
        await expect(logout).toBeVisible();

    })
}