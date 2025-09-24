// src/app/core/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    console.log('--- El Guard de Auth se está ejecutando ---'); // <-- NUEVO

    return this.afAuth.authState.pipe(
      take(1),
      map(user => {
        console.log('El estado del usuario es:', user); // <-- NUEVO

        if (user) {
          console.log('Resultado: PERMITIDO (true)'); // <-- NUEVO
          return true;
        } else {
          console.log('Resultado: DENEGADO (false), redirigiendo a /login...'); // <-- NUEVO
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
