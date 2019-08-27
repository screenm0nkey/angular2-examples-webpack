import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainHttpRxJs} from './async.component';
import {HttpExamples} from './searches/main';
import {EchonestAppComponent} from './echonest-app/echonest.module';
import {JohnLinquistExamples} from './john-linquist/main';
import {MiscHttpExamples} from './misc-examples/main';
import {ChatAppComponent} from './chat-app-rxjs/ts/app';
import {SpotifyDemoApp} from "./spotify/spotify.module";
import {NgrxContainerComponent} from './ngrx/_ngrx-container.component';

export const asyncRoutes: Routes = [
  {
    path: '',
    component: MainHttpRxJs,
    children: [
      {path: '', redirectTo: 'john-linquist', pathMatch: 'full'},
      {path: 'john-linquist', component: JohnLinquistExamples},
      {path: 'http-examples', component: HttpExamples},
      {path: 'echonest-app', component: EchonestAppComponent},
      {path: 'misc-examples', component: MiscHttpExamples},
      {path: 'chat-app-rxjs', component: ChatAppComponent},
      {path: 'spotify', loadChildren: './spotify/spotify.module#SpotifyModule'},
      {path: 'spotify', component: SpotifyDemoApp},
      {path: 'ngrx', component: NgrxContainerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(asyncRoutes)]
})
export class AsyncRoutingModule {
}
