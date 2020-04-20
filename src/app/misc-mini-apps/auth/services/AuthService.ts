import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  login(user: string, password: string): boolean {
    if (user === 'lowman' && password === 'password') {
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  validateUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.validateUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  {provide: AuthService, useClass: AuthService}
];
