import{test,expect} from "@playwright/test";

test("date picker @smoke", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#txtDate").click();
    await page.locator(".ui-datepicker-month").selectOption({label:"Dec"});
    await page.locator(".ui-datepicker-year").selectOption({value:"2027"});
    await page.locator("#ui-datepicker-div").getByRole("link",{name:"25", exact:true}).click();
    await page.waitForTimeout(5000);
})