import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EggheadApp} from './egghead-example/egghead.module';
import {ChatApp} from './chat-app/ts/app.module';
import {ChatAppRedux} from './chat-app-redux/ts/app.module';

export const routes: Routes = [
  {path: '', redirectTo: 'forms', pathMatch: 'full'},
  {path: 'forms', loadChildren: 'src/app/forms/forms.module#FormExamplesModule'},
  {path: 'lifecycle', loadChildren: 'src/app/lifecycle/lifecycle.module.ts#LifeCycleModule'},
  {path: 'seed', loadChildren: 'src/app/seed/seed.module.ts#SeedModule'},
  {path: 'httprx', loadChildren: 'src/app/http-rxjs/async.module.ts#HttpRxJsModule'},
  {path: 'egghead', component: EggheadApp},
  {path: 'auth', loadChildren: 'src/app/auth/auth.module.ts#AuthAppModule'},
  {path: 'chat', component: ChatApp},
  {path: 'chat-redux', component: ChatAppRedux}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);



