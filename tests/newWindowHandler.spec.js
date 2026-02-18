const {test,expect}= require('@playwright/test')

test("New window Handler", async ({browser}) =>{

const context =await browser.newContext();
const page =await  context.newPage()
await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html")


const [newPage] = await Promise.all
(
    [
         context.waitForEvent("page"),
         page.locator("#newTabBtn").click(),
      //   page.pause()
    ]
)

await newPage.on('dialog',async (d)=>{
    await expect(d.type()).toContain("alert")
    await d.accept();
})
await newPage.locator("#alertBox").click()
await newPage.waitForTimeout(3000)
await newPage.close()

await page.locator("#name").type("SONANATARAJAN",{delay: 300})
await page.waitForTimeout(3000)
})