import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHttpRxJs } from './async.component';
import { EchonestAppComponent } from './echonest-app/echonest.module';
import { RxJsExamplesComponent } from './rxjs-examples/_rxjs-examples.component';
import { ChatAppComponent } from './chat-app-rxjs/ts/app';
import { NgrxContainerComponent } from './ngrx/_ngrx-container.component';
import { HttpExamples } from './searches/_searches.component';

export const asyncRoutes: Routes = [
  {
    path: '',
    component: MainHttpRxJs,
    children: [
      { path: '', redirectTo: 'searches', pathMatch: 'full' },
      { path: 'searches', component: HttpExamples },
      { path: 'rxjs-examples', component: RxJsExamplesComponent },
      { path: 'ngrx-examples', component: NgrxContainerComponent },
      { path: 'echonest-app', component: EchonestAppComponent },
      { path: 'chat-app-rxjs', component: ChatAppComponent },
      { path: 'spotify', loadChildren: './spotify/spotify.module#SpotifyModule' },
      // { path: 'spotify', component: SpotifyDemoApp },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(asyncRoutes)]
})
export class AsyncRoutingModule {
}
