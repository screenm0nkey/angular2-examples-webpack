import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoggedInGuard, UserCanDeactivate} from './guards/activation.guard';
import {HomeComponent} from './components/HomeComponent';
import {AboutComponent} from './components/AboutComponent';
import {ContactComponent} from './components/ContactComponent';
import {ProtectedComponent} from './components/ProtectedComponent';
import {AuthAppComponent} from './auth.component';


const formsRoutes: Routes = [
  {
    path: '',
    component: AuthAppComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            component: HomeComponent},
          {
            path: 'aboutus/:id', component: AboutComponent,
            canDeactivate: [UserCanDeactivate],
            data: {preload: 'sausagepart'}
          },
          {
            path: 'contact',
            component: ContactComponent},
          {
            path: 'protected',
            component: ProtectedComponent,
            canActivate: [LoggedInGuard]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(formsRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    UserCanDeactivate,
    LoggedInGuard
  ]
})
export class AuthRoutingModule {
}

