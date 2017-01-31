import {Injectable, Component} from '@angular/core';
import {CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/AuthService';
import {DialogService} from '../services/dialog.service';
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


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}


@Injectable()
export class UserCanDeactivate implements CanDeactivate<CanComponentDeactivate> {
  constructor(public dialogService: DialogService) {
  }

  canDeactivate(component: Component,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return this.dialogService.confirm('Are you sure you want to leave ' + route.params['id']);
  }
}
