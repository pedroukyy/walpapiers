import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  private translations: any = {
    es: { // Español
      LOGIN_TITLE: 'Iniciar Sesión',
      EMAIL_LABEL: 'Correo Electrónico',
      PASSWORD_LABEL: 'Contraseña',
      LOGIN_BUTTON: 'Ingresar',
      REGISTER_LINK: '¿No tienes cuenta? Regístrate'
    },
    en: { // Inglés
      LOGIN_TITLE: 'Login',
      EMAIL_LABEL: 'Email',
      PASSWORD_LABEL: 'Password',
      LOGIN_BUTTON: 'Sign In',
      REGISTER_LINK: "Don't have an account? Sign Up"
    }
  };

  private currentLang: 'es' | 'en' = 'es';

  constructor() { }

  setLanguage(lang: 'es' | 'en') {
    this.currentLang = lang;
  }

  get(key: string): string {
    return this.translations[this.currentLang][key] || key;
  }
}
