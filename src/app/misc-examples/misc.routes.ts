import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MiscExamplesComponent } from "./misc.component";
import { _mainComponent } from "./components/chickens/_chickens.module";
import { ChangeDetectionMain } from "./components/change-detection/main";
import { MainContentProjectionComponent } from "./components/content-children/_main.component";
import { FocusInput } from "./components/focusing-input/main";
import { HostBindingComponent } from "./components/host-binding/main";
import { DirectivesLinquistMain } from "./components/directives-linquist/_main";
import { MainInputBindingApp } from "./components/input-binding/main";
import { NgStyleMainComponent } from "./components/ng-style/main";
import { NgZoneMainComponent } from "./components/ng-zone/ngzone.module";
import { AppComponent } from "./components/notifications/main.component";
import { MainViewChildrenComponent } from "./components/view-children/_main.component";
import { TricksMainComponent } from "./components/tricks/main";
import { TipsMainComponent } from "./components/tips/main";
import { TemplateComponent } from "./components/template-directives/main.component";
import { ChangeAfterComponent } from "./components/changed-after-check/_main.module";
import { ModulesComponent } from "./components/dependency-injection/modules.component";
import { PipesComponent } from "./components/dependency-injection/pipes.component";
import { InterceptorComponent } from "./components/interceptors/interceptor.component";
import { LinksComponent } from "./components/links/links.component";
import { DynamicMainComponent } from "./components/dynamic-components/_main.component";
import { DepInjectionComponent } from "./components/dependency-injection/_main.component";

export const formsRoutes: Routes = [
  {
    path: "",
    component: MiscExamplesComponent,
    children: [
      { path: "", redirectTo: "links", pathMatch: "full" },
      { path: "dep-injection", component: DepInjectionComponent },
      { path: "modules", component: ModulesComponent },
      { path: "pipes", component: PipesComponent },
      { path: "chickens", component: _mainComponent },
      { path: "change-after-check", component: ChangeAfterComponent },
      { path: "change-detection", component: ChangeDetectionMain },
      { path: "content-projection", component: MainContentProjectionComponent },
      { path: "focus-input", component: FocusInput },
      { path: "hostbinding", component: HostBindingComponent },
      { path: "directives", component: DirectivesLinquistMain },
      { path: "input-binding", component: MainInputBindingApp },
      { path: "ngzone", component: NgZoneMainComponent },
      { path: "ngstyle", component: NgStyleMainComponent },
      { path: "notifications", component: AppComponent },
      { path: "templates", component: TemplateComponent },
      { path: "view-children", component: MainViewChildrenComponent },
      { path: "tricks", component: TricksMainComponent },
      { path: "tips", component: TipsMainComponent },
      { path: "interceptor", component: InterceptorComponent },
      { path: "dynamic", component: DynamicMainComponent },
      { path: "links", component: LinksComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(formsRoutes)]
})
export class MiscRoutingModule {}
