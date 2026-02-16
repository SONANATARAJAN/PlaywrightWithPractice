const{test,expect}=require('@playwright/test')

test("Upload Files ",async ({page})=>{
   await page.goto("https://practice.expandtesting.com/upload")
  await  page.locator("#fileInput").setInputFiles("screenshot.png")
  await  page.locator("#fileSubmit").click();
   await page.waitForTimeout(3000)
})