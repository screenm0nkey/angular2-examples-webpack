import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainHttpRxJs} from './async.component';
import {HttpExamples} from './searches/searches.module';
import {EchonestAppComponent} from './echonest-app/echonest.module';
import {JohnLinquistExamples} from './john-linquist/index.module';
import {MiscHttpExamples} from './misc-examples/misc.module';
// import {NgrxMainComponent} from './ngrx/ngrx-main.component';
import {ChatAppComponent} from './chat-app-rxjs/ts/app';

const asyncRoutes: Routes = [
  {
    path: '',
    component: MainHttpRxJs,
    children: [
      {path: '', redirectTo: 'john-linquist', pathMatch: 'full' },
      {path: 'john-linquist', component: JohnLinquistExamples},
      {path: 'http-examples', component: HttpExamples},
      {path: 'echonest-app', component: EchonestAppComponent},
      {path: 'misc-examples', component: MiscHttpExamples},
      // {path: 'ngrx', component: NgrxMainComponent},
      {path: 'chat-app-rxjs', component: ChatAppComponent},
      {path: 'spotify', loadChildren: './spotify/spotify.module#SpotifyModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(asyncRoutes)]
})
export class AsyncRoutingModule {
}
