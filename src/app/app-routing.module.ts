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
    loadChildren: () => import('./forms/forms.module').then(m => m.NickFormsModule),
    data: {preload: true}
  },
  {
    path: 'misc',
    loadChildren: () => import('./misc-examples/_misc.module').then(m => m.MiscExamplesModule)
  },
  {
    path: "httprx",
    loadChildren: () => import('./http/async.module').then(m => m.HttpRxJsModule)
  },
  {
    path: "lifecycle",
    loadChildren: () => import('./lifecycle/lifecycle.module').then(m => m.LifeCycleModule)
  },
  {
    path: "mini-apps",
    loadChildren: () => import('./misc-mini-apps/mini-apps.module').then(m => m.MiniAppsModule)
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
