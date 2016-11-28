import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainHttpRxJs} from './async.component'
import {HttpExamples} from './searches/searches.module';
import {EchonestAppComponent} from './echonest-app/echonest.module';
import {JohnLinquistExamples} from './john-linquist/john.module';
import {MiscHttpExamples} from './misc-examples/misc.module';
import {MainClocks} from './ngrx-clock/ngrxclock.module';
import {NgRxInTenMinsComponent} from './ngrx-in-ten/ngrxinten.module';
import {SpotifyDemoApp} from './spotify/spotify.module';
import {MainApp} from './ngrx-queue/main';

const routes: Routes = [
  {
    path: 'httprx',
    component: MainHttpRxJs,
    children: [
      {path: '', redirectTo: 'http-examples',  pathMatch: 'full'},
      {path: 'http-examples', component: HttpExamples},
      {path: 'john-linquist', component: JohnLinquistExamples},
      {path: 'echonest-app', component: EchonestAppComponent},
      {path: 'misc-examples', component: MiscHttpExamples},
      {path: 'ngrx', component: MainClocks},
      {path: 'ngrx-in-ten', component: NgRxInTenMinsComponent},
      {path: 'ngrx-queue', component: MainApp},
      {path: 'spotify', component: SpotifyDemoApp}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
