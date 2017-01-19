import {NgModule} from '@angular/core';
import {routing} from './auth.routes';
import {SharedModule} from '../shared/shared.module';

import {LoginComponent} from './components/LoginComponent';
import {HomeComponent} from './components/HomeComponent';
import {AboutComponent} from './components/AboutComponent';
import {ContactComponent} from './components/ContactComponent';
import {ProtectedComponent} from './components/ProtectedComponent';
import {ComposeMessageComponent} from './components/compose-message.component';
import {AuthAppComponent} from './auth.component'
import {AUTH_PROVIDERS} from './services/AuthService';
import {LoggedInGuard, UserCanDeactivate} from './guards/activation.guard';

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
    LoginComponent,
    ComposeMessageComponent
  ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard,
    UserCanDeactivate
  ]
})
export class AuthAppModule {
}
