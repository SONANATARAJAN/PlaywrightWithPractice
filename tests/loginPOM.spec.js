const {test,expect}=require('@playwright/test')
const LoginPage = require('../pages/LoginPage');

test("Login Page", async function({page}){
      await page.goto(
        "https://practicetestautomation.com/practice-test-login/"
      );

      const loginpage = new LoginPage(page)
      await loginpage.login("student","Password123")
    
   
})