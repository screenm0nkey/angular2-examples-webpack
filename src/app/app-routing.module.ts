import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'httprx',
    pathMatch: 'full'
  },
  {
    path: 'forms',
    loadChildren: '../app/forms/forms.module#NickFormsModule',
    data: { preload: true }
  },
  {
    path: 'misc',
    loadChildren: '../app/misc-examples/misc.module#MiscExamplesModule'
  },
  {
    path: "httprx",
    loadChildren: "../app/http-rxjs/async.module#HttpRxJsModule"
  },
  {
    path: "lifecycle",
    loadChildren: "../app/lifecycle/lifecycle.module#LifeCycleModule"
  },
  {
    path: "mini-apps",
    loadChildren: "./misc-mini-apps/mini-apps.module#MiniAppsModule"
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing : true,
      preloadingStrategy: SelectivePreloadingStrategy
    })
  ],
  providers: [SelectivePreloadingStrategy],
  exports: [RouterModule]
})
export class AppRoutingModule {}
