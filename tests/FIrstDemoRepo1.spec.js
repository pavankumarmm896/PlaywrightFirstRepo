const{test} = require("@playwright/test")
test('Home Page',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
})