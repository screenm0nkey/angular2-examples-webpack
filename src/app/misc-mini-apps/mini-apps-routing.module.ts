import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EggheadAppComponent} from './egghead-example/egghead.module';
import {MiniAppsComponent} from './mini-apps.component';
import {CustomerDetailComponent, CustomersComponent} from './customers/customers.module';
import {ReduxChatAppComponent} from './chat-app-redux/ts/app.module';


export const formsRoutes: Routes = [
  {
    path: '',
    component: MiniAppsComponent,
    children: [
      {
        path: '',
        children: [
          {path: '', component: EggheadAppComponent},
          {path: 'auth-app', loadChildren: './auth/auth.module#AuthAppModule'},
          {path: 'redux-chat-app', component: ReduxChatAppComponent},
          {path: 'seed-app', loadChildren: './seed-component/seed.module#SeedModule'},
          {path: 'customers', component: CustomersComponent},
          {path: 'customers/:id', component: CustomerDetailComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(formsRoutes)]
})
export class MiniAppsRoutingModule {
}
