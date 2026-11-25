import { test, expect } from "@playwright/test";


test("visble screenshot @smoke", async ({ page }) => {

    //screenshot of given page that is visible
    await page.goto("https://demowebshop.tricentis.com/");
    await page.screenshot({ path: "test11.png" });
})


//screenshot of entire page in the given website
test("entire screen  screenshot @regression", async ({ page }) => {

    //scrrenshot of given paeg that is visible
    await page.goto("https://demowebshop.tricentis.com/");
    await page.screenshot({ path: "screen2.png", fullPage: true });
    //screenshot of given element

})
 //screenshot of given element
test("entire screen  screenshot @smoke", async ({ page }) => {

    //scrrenshot of given paeg that is visible
    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByRole("img",{name:"Tricentis Demo Web Shop"}).screenshot({ path: "Screenshot/element.png"});
   

})