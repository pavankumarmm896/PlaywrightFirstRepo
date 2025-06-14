const {test,expect}=require('@playwright/test');
test('Home Page',async({page})=>{
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   
   const pageUrl=page.url()
   console.log('The page URL is'+pageUrl);
   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

   const pageTitle=page.title()
   console.log('The page Title is'+pageTitle);
   await expect(page).toHaveTitle('OrangeHRM');

   //await page.locator("input[name='username']").fill('Admin');
   //await page.locator("input[type='password']").fill('admin123');

   //await page.waitForTimeout(5000);
   await expect(page.locator("(//label[@class='oxd-label'])[1]")).toBeVisible()
   await expect(page.locator("(//label[@class='oxd-label'])[2]")).toBeVisible()

   await expect (page.locator("input[name='username']")).toBeEmpty();
   await expect (page.locator("input[type='password']")).toBeEmpty();

   await expect (page.locator("input[name='username']")).toBeEnabled
   await expect (page.locator("input[type='password']")).toBeEnabled
   
   await page.locator("input[name='username']").fill('Admin');
   await page.locator("input[type='password']").fill('admin123');

   await page.locator("button[type='submit']", { name: 'Submit' }).click();
   



   //await page.close();
})