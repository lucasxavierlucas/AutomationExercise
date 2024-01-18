import { Page, Locator } from '@playwright/test';

export class ShoppingCartPage {
  constructor(private page: Page) {}

  async searchAndAddProduct(productName: string): Promise<void> {
    // Click on the search input and perform a product search
    const searchInputLocator = await this.page.waitForSelector('[name="search"]');
    await searchInputLocator.fill(productName);
    await this.page.getByRole('button', { name: '' }).click();

    // Click on the first product in the search results to add it to the cart
    await page.locator('.overlay-content > .btn').first().click();
    await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
     
    // Handle any pop-ups or overlays if needed
    // Example: await this.page.waitForSelector('.popup-selector');
    //          await this.page.click('.popup-selector .confirm-button');

    // Continue Shopping
    await this.page.locator('#cartModal div').filter({ hasText: 'Continue Shopping' }).nth(2).click();
  }

  async doesCartContainColorText(productName: string, colorText: string): Promise<boolean> {
    // Click on the 'Cart' link to view the cart
    await this.page.click('[role="link"][name=" Cart"]');

    // Check whether the specified product in the cart contains the specified color text
    const productLocator = await this.page.waitForSelector(`#cartModal div[aria-label="${productName}"]`);
    const productText = await productLocator.innerText();

    return productText.toLowerCase().includes(colorText.toLowerCase());
  }
}
