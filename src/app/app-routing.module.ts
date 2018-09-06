import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./not-found.component";
import { ComposeMessageComponent } from "./misc-mini-apps/auth/components/compose-message.component";
import { SelectivePreloadingStrategy } from "./selective-preloading-strategy";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "misc",
    pathMatch: "full"
  },
  {
    path: "compose",
    component: ComposeMessageComponent,
    outlet: "popup"
  },
  {
    path: "forms",
    loadChildren: "./forms/forms.module#NickFormsModule",
    data: { preload: true }
  },
  {
    path: "misc",
    loadChildren: "./misc-examples/misc.module#MiscExamplesModule"
  },
  {
    path: "lifecycle",
    loadChildren: "./lifecycle/lifecycle.module.ts#LifeCycleModule"
  },
  {
    path: "httprx",
    loadChildren: "./http-rxjs/async.module.ts#HttpRxJsModule"
  },
  {
    path: "mini-apps",
    loadChildren: "./misc-mini-apps/mini-apps.module.ts#MiniAppsModule"
  },
  {
    path: "**",
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
