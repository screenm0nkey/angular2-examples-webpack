import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {ProblemOneComponent, SuperListComponent} from './problem-one';
import {ProblemOneFixComponent, FixSuperListComponent, SuperListDirective} from './problem-one-fix';
import {RookieComponent} from './_main.component';
import {ContentChildrenTab1, ContentChildrenTabs1, ContentChildrenTabset1} from './tabs1';
import {ContentChildrenTab2, Pane2, Tab2} from "./tabs2";

@NgModule({
  imports: [SharedModule],
  // exporting it, allows the the component to be used in _multicontent.module.ts
  exports: [
    ContentChildrenTab1, ContentChildrenTabset1, ContentChildrenTabs1,
    ContentChildrenTab2, Pane2, Tab2,
    ProblemOneComponent,
    ProblemOneFixComponent,
  ],
  declarations: [
    RookieComponent,
    ProblemOneComponent,
    ProblemOneFixComponent,
    SuperListComponent,
    FixSuperListComponent,
    SuperListDirective,
    ContentChildrenTab1, ContentChildrenTabset1, ContentChildrenTabs1,
    ContentChildrenTab2, Pane2, Tab2
  ],
})
export class ContentChildrenModule {
}

export {RookieComponent};
