import { test, expect } from '@playwright/test';
import { ShoppingCartPage } from '../pages/shoppingCartPage';
import { readFileSync } from 'fs';

// Read products from the external file
const products = JSON.parse(readFileSync('./data/products.json', 'utf-8'));

test('Add products to cart and assert colors', async ({ page }) => {
  const shoppingCartPage = new ShoppingCartPage(page);

  // Navigate to the products page
  await page.goto('https://www.automationexercise.com/products');

  // Iterate through each product in the external file
  for (const product of products) {
    // Search and add the product to the cart
    await shoppingCartPage.searchAndAddProduct(product.productName);

    // Assert that the added product contains the expected color 'Blue'
    await expect(shoppingCartPage.doesCartContainColorText(product.productName, product.containsColor)).toBeTruthy();
  }

  // Assert that no product with 'Yellow' is in the cart
  await expect(shoppingCartPage.doesCartContainColorText('Yellow', 'Yellow')).toBeFalsy();
});
