import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Ecommers/);
});

test('catalog renders products', async ({ page }) => {
  await page.goto('/');
  const products = await page.locator('h3');
  await expect(products).toHaveCount(6);
});
