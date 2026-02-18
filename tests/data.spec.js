const {test,expect}= require('@playwright/test')
const json=JSON.parse(JSON.stringify(require("../testData.json")));
test("testData Login",async function({page}){
   await page.goto("https://practice.expandtesting.com/login")
   await page.locator("#username").fill(json.username)
   await page.pause()
})