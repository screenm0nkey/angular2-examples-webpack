import {NgModule} from '@angular/core';
import {MiscRoutingModule} from './misc.routes';
import {SharedModule} from '../shared/_shared.module';
import {MiscExamplesComponent} from './misc.component';
import {ChildViewModule} from './components/view-children/_childviews.module';
import {TricksModule} from './components/tricks/_tricks.module';
import {ChickensModule} from './components/chickens/_chickens.module';
import {ChangeModule} from './components/change-detection/_change.module';
import {ContentChildrenModule} from './components/content-children/_content-children.module';
import {FocusingInputModule} from './components/focusing-input/_focusing.module';
import {HostBindingModule} from './components/host-binding/_hosting.module';
import {LinquistDirectivesModule} from './components/directives-linquist/_linquist-directives.module';
import {DependencyModule} from './components/dependency-injection/_main.module';
import {InputBindingModule} from './components/input-binding/_input-binding.module';
import {MultiContentModule} from './components/multi-content/_multicontent.module';
import {NgStyleModule} from './components/ng-style/ngstyle.module';
import {NgZoneModule} from './components/ng-zone/ngzone.module';
import {NotifcationModule} from './components/notifications/_notifications.module';
import {TemplatesModule} from './components/template-directives/_templates.module';
import {ChangedAfterModule} from './components/changed-after-check/_main.module';
import {TipsModule} from './components/tips/_tips.module';
import {InterceptorModule} from "./components/interceptors/_interceptor.module";
import {LinksComponent} from "./components/links/links.component";
import {DynamicExamplesModule} from "./components/dynamic-components/_dynamic.module";

@NgModule({
  imports: [
    SharedModule,
    MiscRoutingModule,
    TricksModule,
    ChildViewModule,
    ChickensModule,
    ChangeModule,
    ContentChildrenModule,
    FocusingInputModule,
    HostBindingModule,
    DependencyModule,
    InputBindingModule,
    MultiContentModule,
    NgStyleModule,
    NgZoneModule,
    NotifcationModule,
    TemplatesModule,
    LinquistDirectivesModule,
    ChangedAfterModule,
    TipsModule,
    InterceptorModule,
    DynamicExamplesModule,
  ],
  declarations: [
    MiscExamplesComponent,
    LinksComponent
  ]
})
export class MiscExamplesModule {
}
