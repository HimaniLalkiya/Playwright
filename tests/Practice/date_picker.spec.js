import { test, expect } from '@playwright/test';

test('Select past and future dates', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/jquery-date-picker-demo/');

    // FROM - October 1, 2026
    await page.getByRole('textbox', { name: 'From' }).click();
    // Click previous month
    await page.getByTitle('Prev').click();
    // Select date 1
    await page.locator('#ui-datepicker-div').getByRole('link', { name: '1', exact: true }).click();
    // TO - December 8, 2026
    await page.getByRole('textbox', { name: 'To' }).click();
    // Click next month
    await page.getByTitle('Next').click();
    // Select date 8
    await page.locator('#ui-datepicker-div').getByRole('link', { name: '8', exact: true }).click();
    // Verify dates
    await expect(page.locator('#from')).toHaveValue('10/01/2026');
    await expect(page.locator('#to')).toHaveValue('12/08/2026');
});
