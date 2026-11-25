import { test, expect } from '@playwright/test';

// test('Select past and future dates1', async ({ page }) => {
//     await page.goto('https://www.hyrtutorials.com/p/calendar-practice.html', { waitUntil: 'domcontentloaded' });
//     await page.getByTitle('Calendar-icon').click();
//     await page.getByTitle('Prev').click();
//     await page.locator('#ui-datepicker-div').getByRole('link', { name: '2', exact: true }).click();

//     await expect(page.locator('#sixth_date_picker')).toHaveValue('10/02/2026');
// });


test('Select past and future dates2', async ({ page }) => {
    await page.goto('https://www.hyrtutorials.com/p/calendar-practice.html', { waitUntil: 'domcontentloaded' });
    await page.locator('#third_date_picker').click();
    await page.locator('.ui-datepicker-month').selectOption('Dec');
    await page.locator('.ui-datepicker-year').selectOption('2028');
    await page.locator('.ui-datepicker-calendar').getByRole('link',{name:'25',exact:true}).click();
    await expect(page.locator('#third_date_picker')).toHaveValue('12/25/2028');
    

});
