import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MiscExamplesComponent} from './misc.component';
import {MainComponent} from './components/chickens/main.module';
import {ChangeDetectionMain} from './components/change-detection/change.module';
import {RookieComponent} from './components/content-children/content-child.module';
import {FocusInput} from './components/focusing-input/focusing.module';
import {HostBindingComponent} from './components/host-binding/hosting.module';
import {DirectivesLinquistMain} from './components/directives-linquist/directives.module';
import {DepInjectionComponent} from './components/dependency-injection/main.module';
import {MainInputBindingApp} from './components/input-binding/inputbinding.module';
import {MultiTransclusion} from './components/multi-content/multicontent.module';
import {NgStyleMainComponent} from './components/ng-style/ngstyle.module';
import {NgZoneMainComponent} from './components/ng-zone/ngzone.module';
import {AppComponent} from './components/notifications/main.module';
import {MainChildrenApp} from './components/view-children/childviews.module';
import {TricksMainComponent} from './components/tricks/tricks.module';
import {TipsMainComponent} from './components/tips/tips.module';
import {TemplateComponent} from './components/template-directives/templates.module';
import {ChangeAfterComponent} from './components/changed-after-check/main.module';
import {ModulesComponent} from './components/dependency-injection/modules';
import {PipesComponent} from './components/dependency-injection/pipes.component';

export const formsRoutes: Routes = [
  {
    path: '',
    component: MiscExamplesComponent,
    children: [
      {path: '', redirectTo: 'dep-injection', pathMatch: 'full' },
      {path: 'dep-injection', component: DepInjectionComponent},
      {path: 'modules', component: ModulesComponent},
      {path: 'pipes', component: PipesComponent},
      {path: 'chickens', component: MainComponent},
      {path: 'change-after-check', component: ChangeAfterComponent},
      {path: 'change-detection', component: ChangeDetectionMain},
      {path: 'rookie-mistakes', component: RookieComponent},
      {path: 'focus-input', component: FocusInput},
      {path: 'hostbinding', component: HostBindingComponent},
      {path: 'directives', component: DirectivesLinquistMain},
      {path: 'input-binding', component: MainInputBindingApp},
      {path: 'content-projection', component: MultiTransclusion},
      {path: 'ngzone', component: NgZoneMainComponent},
      {path: 'ngstyle', component: NgStyleMainComponent},
      {path: 'notifications', component: AppComponent},
      {path: 'templates', component: TemplateComponent},
      {path: 'view-children', component: MainChildrenApp},
      {path: 'tricks', component: TricksMainComponent},
      {path: 'tips', component: TipsMainComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(formsRoutes)]
})
export class MiscRoutingModule {
}
