export class LoginPage {
    private readonly page: any;
  
    constructor(page: any) {
      this.page = page;
    }
  
    async fillEmail(email: string) {
      await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
    }
  
    async fillPassword(password: string) {
      await this.page.getByPlaceholder('Password').fill(password);
    }
  
    async clickLoginButton() {
      await this.page.getByRole('button', { name: 'Login' }).click();
    }
  
    }
  
  