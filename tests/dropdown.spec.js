const{test,expect} = require('@playwright/test')
const { log } = require('node:console')

test("To Practice DropDown", async function ({page}) {
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
  await  page.locator("#dropdown-class-example").selectOption({value:"option1"})


 const values=  await page.locator("#dropdown-class-example").textContent()
 log("All DropDown" + values)

 await expect(values.includes("Option2")).toBeTruthy()
   await page.waitForTimeout(3000)

 
 await page.locator("#checkBoxOption1").click()
 
    
})