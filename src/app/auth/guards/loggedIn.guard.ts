import {Injectable} from '@angular/core';
import {CanActivate, CanDeactivate} from '@angular/router';
import {AuthService} from '../services/AuthService';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService) {
  }

  canActivate(): boolean {
    return this.authService.isLoggedIn();
  }
}


Injectable()
export class UserCanDeactivate implements CanDeactivate<any> {
  canDeactivate() {
    return window.confirm('Do you want to continue?');
  }
}
