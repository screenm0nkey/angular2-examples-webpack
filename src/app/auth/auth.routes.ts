import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoggedInGuard, UserCanDeactivate} from './guards/activation.guard';

import {HomeComponent} from './components/HomeComponent';
import {AboutComponent} from './components/AboutComponent';
import {ContactComponent} from './components/ContactComponent';
import {ProtectedComponent} from './components/ProtectedComponent';
import {ComposeMessageComponent} from './components/compose-message.component';
import {AuthAppComponent} from './auth.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthAppComponent,
    children: [
      {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
      },
      {path: 'home', component: HomeComponent},
      {
        path: 'aboutus/:id', component: AboutComponent,
        canDeactivate: [UserCanDeactivate],
        data: {preload: 'sausagepart'}
      },
      {path: 'contact', component: ContactComponent},
      {
        path: 'protected', component: ProtectedComponent,
        canActivate: [LoggedInGuard]
      },
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
