const {test,expect}=require('@playwright/test')

test("Test Alert",async ({page})=>{
 await   page.goto("https://practice.expandtesting.com/js-dialogs")

 page.on('dialog',async (d)=>{
    expect(d.type()).toContain('alert')
    await d.accept()
 })
 await page.locator("#js-alert").click()


})

test("confirm alert",async function({page}){
 await   page.goto("https://practice.expandtesting.com/js-dialogs")

page.on('dialog',async(com)=>{
    expect(com.type()).toContain('confirm')
    await com.dismiss()
})
await page.locator("#js-confirm").click()


})