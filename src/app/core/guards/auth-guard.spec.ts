import { TestBed } from '@angular/core/testing';
// 1. IMPORTAMOS LA CLASE CORRECTA (CON MAYÚSCULA)
import { AuthGuard } from './auth-guard';
// Importamos las dependencias del guard para poder "simularlas" en la prueba
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  // Creamos "dobles" o "simulacros" de las dependencias
  const afAuthStub = {};
  const routerStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      // 2. PROVEEMOS EL GUARD Y SUS DEPENDENCIAS SIMULADAS
      // Le decimos a Angular: "Cuando alguien pida el AuthGuard, créalo,
      // y cuando pida sus dependencias, dale estas versiones de prueba".
      providers: [
        AuthGuard,
        { provide: AngularFireAuth, useValue: afAuthStub },
        { provide: Router, useValue: routerStub }
      ]
    });
    // Inyectamos el guard para poder usarlo en la prueba
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    // La prueba ahora simplemente comprueba que el guard se pudo crear con éxito.
    expect(guard).toBeTruthy();
  });
});
