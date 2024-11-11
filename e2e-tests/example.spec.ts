import { test, expect } from "@playwright/test";

test("is up and running", async ({ page }) => {
  const pageNavigation = await page.goto("/");

  expect(pageNavigation?.status()).toBe(200);
  await expect(page).toHaveTitle(/Automated End-to-End Tests example/);
});
