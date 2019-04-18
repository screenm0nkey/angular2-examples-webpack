import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './not-found.component';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';
import {ComposeMessageComponent} from "./misc-mini-apps/auth/components/compose-message.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'misc',
    pathMatch: 'full'
  },
  {
    path: 'forms',
    loadChildren: './forms/forms.module#NickFormsModule',
    data: {preload: true}
  },
  {
    path: 'misc',
    loadChildren: './misc-examples/_misc.module#MiscExamplesModule'
  },
  {
    path: "httprx",
    loadChildren: "./http/async.module#HttpRxJsModule"
  },
  {
    path: "lifecycle",
    loadChildren: "./lifecycle/lifecycle.module#LifeCycleModule"
  },
  {
    path: "mini-apps",
    loadChildren: "./misc-mini-apps/mini-apps.module#MiniAppsModule"
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: "compose",
    component: ComposeMessageComponent,
    outlet: "popup"
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // this logs the route information
      preloadingStrategy: SelectivePreloadingStrategy
    })
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
