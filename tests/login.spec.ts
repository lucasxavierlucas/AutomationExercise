import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { SignUpPage } from '../pages/signupPage';
import { generateRandomEmail } from '../functions/createAccount';

test.describe('UI Test2 - Login user', () => {
test('Invalid e-mail should not be able to login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();


  // Perform login actions using the LoginPage methods
  const randomEmail = generateRandomEmail();
  await loginPage.fillEmail(randomEmail);
  await loginPage.fillPassword('invalid');
  await loginPage.clickLoginButton();

  // Assert error message is visible
  await expect(page.getByText('Your email or password is')).toBeVisible();
});

test('Valid e-mail should be able to login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const signUpPage = new SignUpPage(page);

  // Navigate to the website
  await page.goto('https://www.automationexercise.com/');

  // Sign up a new user
  await signUpPage.clickSignupLoginLink();
  await signUpPage.fillNameField('LUCAS COUTINHO TEST');
  const randomEmail = generateRandomEmail();
  await signUpPage.fillEmailField(randomEmail);  
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
  await page.getByRole('button', { name: 'Create Account' }).click();  
 

  // Perform login actions using the LoginPage methods
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
  await loginPage.fillEmail(randomEmail);
  await loginPage.fillPassword('Test1234');
  await loginPage.clickLoginButton();

  // Assert successful login
  await expect (page.getByText('Logged in as Lucas')).toBeVisible();

  
});

});