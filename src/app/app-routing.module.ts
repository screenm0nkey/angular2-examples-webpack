import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./not-found.component";
import { EggheadApp } from "./egghead-example/main";
import { ComposeMessageComponent } from "./auth/components/compose-message.component";
import { ChatApp } from "./chat-app/ts/app.module";
import { ChatAppRedux } from "./chat-app-redux/ts/app.module";
import { SelectivePreloadingStrategy } from "./selective-preloading-strategy";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/misc",
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
    path: "seed",
    loadChildren: "./seed-component/seed.module.ts#SeedModule"
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
    path: "auth",
    loadChildren: "./auth/auth.module.ts#AuthAppModule"
  },
  {
    path: "egghead",
    component: EggheadApp
  },
  {
    path: "chat",
    component: ChatApp
  },
  {
    path: "chat-redux",
    component: ChatAppRedux
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: SelectivePreloadingStrategy
    })
  ],
  providers: [SelectivePreloadingStrategy],
  exports: [RouterModule]
})
export class AppRoutingModule {}
