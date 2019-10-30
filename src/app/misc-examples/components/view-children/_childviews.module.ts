import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {MainChildrenApp} from './_main';
import {KeepCountComponent, SuperItemComponent, ViewChildrenComponent} from './add-to-list';
import {CountdownTimerComponent, CountdownViewChildParentComponent} from './countdown';
import {LinquistDirectivesModule} from "../directives-linquist/_linquist-directives.module";

@NgModule({
  imports: [SharedModule, LinquistDirectivesModule],
  declarations: [
    MainChildrenApp,
    ViewChildrenComponent,
    SuperItemComponent,
    KeepCountComponent,
    CountdownViewChildParentComponent,
    CountdownTimerComponent
  ]
})
export class ChildViewModule {
}

export {MainChildrenApp};
