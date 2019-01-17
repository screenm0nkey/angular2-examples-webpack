import {NgModule} from '@angular/core';
import {MiscRoutingModule} from './misc.routes';
import {SharedModule} from '../shared/shared.module';
import {MiscExamplesComponent} from './misc.component';
import {ChildViewsModule} from './components/view-children/childviews.module';
import {TricksModule} from './components/tricks/tricks.module';
import {ChickenModule} from './components/chickens/main.module';
import {_changeModule} from './components/change-detection/_change.module';
import {ContentChildModule} from './components/content-children/content-child.module';
import {FocusingInputModule} from './components/focusing-input/focusing.module';
import {HostBindingModule} from './components/host-binding/hosting.module';
import {DirectivesLinquistModule} from './components/directives-linquist/directives.module';
import {DependencyModule} from './components/dependency-injection/_main.module';
import {InputBindingModule} from './components/input-binding/inputbinding.module';
import {MultiContentModule} from './components/multi-content/multicontent.module';
import {NgStyleModule} from './components/ng-style/ngstyle.module';
import {NgZoneModule} from './components/ng-zone/ngzone.module';
import {NotifcationModule} from './components/notifications/main.module';
import {TemplatesModule} from './components/template-directives/templates.module';
import {ChangedAfterModule} from './components/changed-after-check/_main.module';
import {TipsModule} from './components/tips/tips.module';
import {InterceptorModule} from "./components/interceptors/_interceptor.module";

@NgModule({
  imports: [
    SharedModule,
    MiscRoutingModule,
    TricksModule,
    ChildViewsModule,
    ChickenModule,
    _changeModule,
    ContentChildModule,
    FocusingInputModule,
    HostBindingModule,
    DependencyModule,
    InputBindingModule,
    MultiContentModule,
    NgStyleModule,
    NgZoneModule,
    NotifcationModule,
    TemplatesModule,
    DirectivesLinquistModule,
    ChangedAfterModule,
    TipsModule,
    InterceptorModule
  ],
  declarations: [MiscExamplesComponent]
})
export class MiscExamplesModule {
}
