const {test,expect} = require('@playwright/test')

test("keyboard Action",async function({page}){
   await page.goto("https://www.learnaqa.info/keyboard-mouse-events/")
  await  page.locator("#search-field").press("Control+A");
  await page.waitForTimeout(3000)
   await page.locator("#search-field").press("Backspace")
  await page.waitForTimeout(3000)
  await page.locator("#search-field").focus()
  await page.keyboard.type("Sona Jerry")
await page.locator("#search-field").press("ArrowLeft")
await page.locator("#search-field").press("ArrowLeft")


  await page.locator("//button[@id='start-dialog-scenario']").click()
  await page.locator("span[class='text-xs bg-red-500 px-1 py-0.5 rounded']").click()
  await page.locator((".text-xs.bg-gray-100.px-2.py-1.rounded")).press("Escape")
  await page.waitForTimeout(3000)

//     await page.locator("//div[@class='text-2xl mb-2']").hover()
//   await page.waitForTimeout(3000)

})