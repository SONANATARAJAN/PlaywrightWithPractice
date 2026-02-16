const {test,expect} =require('@playwright/test')

test("hover function",async  ({page}) =>{
    page.goto("https://practice-automation.com/hover/")
  await  page.waitForTimeout(3000)

   await page.locator("#mouse_over").hover()
  await  page.waitForTimeout(3000)
})