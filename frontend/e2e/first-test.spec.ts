import { test, expect } from '@playwright/test';

test('has login button', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  const loginButton = await page.getByRole('button', { name: /Accedir/i })

  // Expect a title "to contain" a substring.
  await expect(loginButton).toBeVisible();
});
