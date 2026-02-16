import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
   await page.getByRole('link', { name: 'Admin' }).click();
   await page.getByRole('link', { name: 'PIM' }).click();
   await page.getByRole('link', { name: 'Leave' }).click();
   await page.locator('.oxd-icon.bi-calendar').first().click();
  await page.getByText('8', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('SONA');
  await page.getByText('-- Select --').nth(2).click();
  await page.getByRole('option', { name: 'Engineering' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Upgrade' }).click();
  const page1 = await page1Promise;
  await page.locator('span').filter({ hasText: 'mandaMedMedMed user' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});