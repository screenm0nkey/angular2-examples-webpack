import {NgModule} from '@angular/core';
import {routing} from './auth.routes';
import {SharedModule} from '../shared/shared.module';

import {LoginComponent} from './components/LoginComponent';
import {HomeComponent} from './components/HomeComponent';
import {AboutComponent} from './components/AboutComponent';
import {ContactComponent} from './components/ContactComponent';
import {ProtectedComponent} from './components/ProtectedComponent';
import {AuthAppComponent} from './auth.component'
import {AUTH_PROVIDERS} from './services/AuthService';
import {LoggedInGuard, UserCanDeactivate} from './guards/loggedIn.guard';

@NgModule({
  imports: [
    routing,
    SharedModule
  ],
  declarations: [
    AuthAppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProtectedComponent,
    LoginComponent
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard,
    UserCanDeactivate
  ]
})
export class AuthAppModule {
}
