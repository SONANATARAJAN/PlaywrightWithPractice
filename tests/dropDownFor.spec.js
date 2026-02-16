const { test, expect } = require("@playwright/test");
const { log } = require("node:console");

test("test Dropdown", async function ({ page }) {
  await page.goto("https://practice.expandtesting.com/dropdown");

  await page.locator("#dropdown").selectOption({ label: "Option 2" });

  await page.waitForTimeout(3000);
 // await page.locator("#country").click();
 await page.locator("#country").waitFor();

  const listCountry = page.locator("#country option")


  //await listCountry.first().waitFor();

  const getSize = await listCountry.count();
  let validCountry = false;
  for (let i = 0; i < getSize; i++) {
    const getText = await listCountry.nth(i).textContent();
    log(`The ${i + 1} country is ${getText}`);

    if (getText.includes("Angola")) {
      validCountry = true;
      break;
    }
  }
  expect(validCountry).toBeTruthy();
});
