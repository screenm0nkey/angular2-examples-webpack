import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoggedInGuard, UserCanDeactivate} from './guards/loggedIn.guard';

import {HomeComponent} from './components/HomeComponent';
import {AboutComponent} from './components/AboutComponent';
import {ContactComponent} from './components/ContactComponent';
import {ProtectedComponent} from './components/ProtectedComponent';
import {AuthAppComponent} from './auth.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthAppComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: ':id', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {
        path: 'protected', component: ProtectedComponent,
        canActivate: [LoggedInGuard],
        canDeactivate: [UserCanDeactivate]
      }]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
