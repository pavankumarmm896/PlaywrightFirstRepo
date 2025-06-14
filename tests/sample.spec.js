const {test, spec}=require('@playwright/test')

test("First Test Script",async ({ page }) => {
    // FIrst Test Script
    await page.goto('https://google.com');
    await page.waitForTimeout(4000); // Wait for 4 seconds
})

test("Second Test Script",async ({ page }) => {
    // FIrst Test Script
    await page.goto('https://yahoo.com');
    await page.waitForTimeout(4000); // Wait for 4 seconds
})
test("Third Test Script",async ({ page }) => {
    // FIrst Test Script
    await page.goto('https://gmail.com');
    await page.waitForTimeout(4000); // Wait for 4 seconds
})