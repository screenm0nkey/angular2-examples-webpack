import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {MainViewChildrenComponent} from './_main.component';
import {ViewChildren01Component} from './view-children-01.component';
import {CountdownTimerComponent, CountdownViewChildParentComponent} from './countdown';
import {LinquistDirectivesModule} from "../directives-linquist/_linquist-directives.module";
import {ViewChildren02Component} from "./view-children-02.component";
import {KeepCountComponent} from "./keep-count.component";
import {SuperListItemComponent} from "./super-list-item.component";
import {ChickensModule} from "../chickens/_chickens.module";
import { FocusingInputModule } from '../focusing-input/_focusing.module';
import { CardComponent,CardHeaderDirective, CardComponentContainer} from './static-property.component'

@NgModule({
  imports: [SharedModule, LinquistDirectivesModule, ChickensModule, FocusingInputModule ],
  declarations: [
    MainViewChildrenComponent,
    ViewChildren01Component,
    ViewChildren02Component,
    SuperListItemComponent,
    KeepCountComponent,
    CountdownViewChildParentComponent,
    CountdownTimerComponent,
   CardComponent,CardHeaderDirective, CardComponentContainer
  ]
})
export class ChildViewModule {
}

export {MainViewChildrenComponent};
