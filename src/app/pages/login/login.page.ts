import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth';

import { TranslateService } from 'src/app/core/services/translate';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  email = '';
  password = '';
  pageTitle = '';
  emailLabel = '';
  passwordLabel = '';
  loginButton = '';
  registerLink = '';

   private currentLang: 'es' | 'en' = 'es';

  constructor(
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.setTexts();
  }

  setTexts() {
    this.pageTitle = this.translate.get('LOGIN_TITLE');
    this.emailLabel = this.translate.get('EMAIL_LABEL');
    this.passwordLabel = this.translate.get('PASSWORD_LABEL');
    this.loginButton = this.translate.get('LOGIN_BUTTON');
    this.registerLink = this.translate.get('REGISTER_LINK');
  }

  toggleLanguage() {
    if (this.currentLang === 'es') {
      this.currentLang = 'en';
    } else {
      this.currentLang = 'es';
    }

    this.translate.setLanguage(this.currentLang);

    this.setTexts();
  }

  async handleLogin() {
    try {
      console.log('Intentando iniciar sesión con:', this.email);
      await this.authService.login(this.email, this.password);

      console.log('¡Login exitoso!');
      this.router.navigate(['/home']);

    } catch (error) {
      console.error('Error en el login:', error);
    }
  }
}
