// src/app/pages/register/register.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone : false
})
export class RegisterPage {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async handleRegister() {
    try {
      console.log('Intentando registrar con:', this.email);
      await this.authService.register(this.email, this.password);

      console.log('¡Registro exitoso!');
      this.router.navigate(['/home']);

    } catch (error) {
      console.error('Error en el registro:', error);
    }
  }
}
