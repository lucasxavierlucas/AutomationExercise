export class SignUpPage {
  private readonly page: any;

  constructor(page: any) {
    this.page = page;
  }

  async clickSignupLoginLink() {
    await this.page.getByRole('link', { name: ' Signup / Login' }).click();
  }

  async fillNameField(name: string) {
    const nameField = this.page.getByPlaceholder('Name');
    await nameField.click();
    await nameField.fill(name);
    await nameField.press('Enter');
  }

  async fillEmailField(email: string) {
    await this.page.fill('form:has-text("Signup") [placeholder="Email Address"]', email);
  }

  async clickSignupButton() {
    await this.page.getByRole('button', { name: 'Signup' }).click();
  }

  async selectTitle() {
    await this.page.getByText('Mr.').check();
  }

  async fillAdditionalNameField(name: string) {
    const nameField = this.page.getByLabel('Name *', { exact: true });
    await nameField.fill(name);
    await nameField.press('Enter');
  }

  async fillPasswordField(password: string) {
    const passwordField = this.page.getByLabel('Password *');
    await passwordField.press('CapsLock');
    await passwordField.fill(password);
    await passwordField.press('Enter');
  }

  async selectDateOfBirth(day: string, month: string, year: string) {
    await this.page.locator('#days').selectOption(day);
    await this.page.locator('#months').selectOption(month);
    await this.page.locator('#years').selectOption(year);
  }

  async checkNewsletter() {
    await this.page.getByLabel('Sign up for our newsletter!').check();
  }

  async checkSpecialOffers() {
    await this.page.getByLabel('Receive special offers from').check();
  }

  async fillFirstName(firstName: string) {
    await this.page.getByLabel('First name *').fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.page.getByLabel('Last name *').fill(lastName);
  }

  async fillCompany(company: string) {
    await this.page.getByLabel('Company', { exact: true }).fill(company);
  }

  async fillAddress(address: string) {
    await this.page.getByLabel('Address * (Street address, P.').fill(address);
  }

  async selectCountry(country: string) {
    await this.page.getByLabel('Country *').selectOption(country);
  }

  async fillState(state: string) {
    await this.page.getByLabel('State *').fill(state);
  }

  async fillCity(city: string) {
    await this.page.getByLabel('City *').fill(city);
  }

  async fillZipCode(zipCode: string) {
    await this.page.locator('#zipcode').fill(zipCode);
  }

  async fillMobileNumber(mobileNumber: string) {
    await this.page.getByLabel('Mobile Number *').fill(mobileNumber);
   }

   

}