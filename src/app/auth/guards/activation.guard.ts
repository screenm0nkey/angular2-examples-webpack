import {Injectable, Component} from '@angular/core';
import {CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/AuthService';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService) {
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    return this.authService.isLoggedIn();
  }
}


Injectable()
export class UserCanDeactivate implements CanDeactivate<any> {
  canDeactivate(
    component: Component,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    return window.confirm('Are you sure you want to leave ' + route.params['id']);
  }
}
