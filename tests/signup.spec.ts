import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/signupPage';

// Helper function to generate a random email
const generateRandomEmail = () => {
  const randomNumber = Math.floor(Math.random() * 10000);
  return `lucas.coutinho${randomNumber}@test.com`;
};

test('Sign up flow should be valid', async ({ page }) => {
  const signUpPage = new SignUpPage(page);

  // Navigate to the website
  await page.goto('https://www.automationexercise.com/');

  // Perform signup actions using the SignUpPage methods
  await signUpPage.clickSignupLoginLink();

  // Fill the Name field
  await signUpPage.fillNameField('LUCAS COUTINHO TEST');

  // Generate a random email
  const randomEmail = generateRandomEmail();

  // Fill the Email Address field with a random email
  await signUpPage.fillEmailField(randomEmail);

  // Click the Signup button
  await signUpPage.clickSignupButton();

  await signUpPage.selectTitle();
  await signUpPage.fillAdditionalNameField('Lucas CoutinhoTest');
  await signUpPage.fillPasswordField('Test1234');
  await signUpPage.selectDateOfBirth('15', '4', '1996');
  await signUpPage.checkNewsletter();
  await signUpPage.checkSpecialOffers();
  await signUpPage.fillFirstName('Lucas');
  await signUpPage.fillLastName('Coutinho Test');
  await signUpPage.fillCompany('Coutinho Org');
  await signUpPage.fillAddress('test #85');
  await signUpPage.selectCountry('United States');
  await signUpPage.fillState('Utah');
  await signUpPage.fillCity('Salt Lake');
  await signUpPage.fillZipCode('85698');
  await signUpPage.fillMobileNumber('6506507896544');

   // Click the Create Account button
   await page.getByRole('button', { name: 'Create Account' }).click();

   // Assert that the 'Account Created!' message is visible
   await expect(page.getByText('Account Created!')).toBeVisible();
 
   // Continue with additional steps after successful signup
   await page.getByRole('link', { name: 'Continue' }).click();
 
   // Assert that the header contains 'Delete Account'
   await expect(page.locator('#header')).toContainText('Delete Account');

});

