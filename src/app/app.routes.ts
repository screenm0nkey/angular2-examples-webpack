import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EggheadApp} from './egghead-example/egghead.module';
import {SpotifyDemoApp} from './http-rxjs/spotify/spotify.module';

export const routes: Routes = [
  {path: '', redirectTo: 'forms', pathMatch: 'full'},
  {path: 'forms', loadChildren: 'src/app/forms/forms.module#FormExamplesModule'},
  {path: 'lifecycle', loadChildren: 'src/app/lifecycle/lifecycle.module.ts#LifeCycleModule'},
  {path: 'seed', loadChildren: 'src/app/seed/seed.module.ts#SeedModule'},
  {path: 'httprx', loadChildren: 'src/app/http-rxjs/async.module.ts#HttpRxJsModule'},
  {path: 'egghead', component: EggheadApp},
  {path: 'spotify', component: SpotifyDemoApp}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);



