const { test, expect } = require("@playwright/test");
const { log } = require("node:console");
  test.use({viewport:{width:1500,height:1000}})

test("Login", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  log(await page.viewportSize().width);
  log(await page.viewportSize().height);

  await page.getByPlaceholder("Username").type("Admin", { delay: 200 });

  await page.getByPlaceholder("Password").type("admin123@ --", { delay: 200 });

  await page.locator("button[type='submit']").click();
await page.screenshot({path:'screenshot.png',fullpage: true})
  // const errorMage = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent();
  // console.log("Error Message : " + errorMage);

  // expect(errorMage.includes("Invalid")).toBeTruthy();

     await page.waitForTimeout(3000);
     await expect(page).toHaveURL(/dashboard/);
    await page.getByAltText("profile picture").first().click();
     await page.getByText("Logout").click()
     await expect(page).toHaveURL(/auth/)
     log("logout SuccessFully")
});
