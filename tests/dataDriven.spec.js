const {test,expect}= require('@playwright/test')
const json=JSON.parse(JSON.stringify(require("../groupTestData.json")))




test.describe("Data Driven Testing",function(){
    for(const data of json){
        test.describe(`Login Application ${data.id}`,function(){
            
test("testData Login",async function({page}){
   await page.goto("https://practice.expandtesting.com/login")
   await page.locator("#username").fill(data.username)
 })
        })
    }
})
