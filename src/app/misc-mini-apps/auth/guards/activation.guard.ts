import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/AuthService';
import { DialogService } from '../services/dialog.service';
import { Observable } from 'rxjs';

/**
 * Interface that a class can implement to be a guard deciding if a route can be activated. 
 * If all guards return true, navigation will continue. If any guard returns false, 
 * navigation will be cancelled.
 */
@Injectable({ providedIn: 'root' })
export class LoggedInGuard implements CanActivate {
  constructor(public authService: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this.permissions.canActivate(this.currentUser, route.params.id);
    return this.authService.isLoggedIn();
  }
}



export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

/**
 * Interface that a class can implement to be a guard deciding if a route can be deactivated. 
 * If all guards return true, navigation will continue. If any guard returns false, navigation 
 * will be cancelled. 
 */
@Injectable({ providedIn: 'root' })
export class UserCanDeactivate implements CanDeactivate<CanComponentDeactivate> {

  constructor(public dialogService: DialogService) {
  }

  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.permissions.canDeactivate(this.currentUser, route.params.id);
    return this.dialogService.confirm(
      `This was triggered by "canDeactive" handler.\nAre you sure you want to leave? \ncurrentRoute.params.id=${currentRoute.params['id']}`
    );
  }
}
