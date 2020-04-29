import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {ProblemOneComponent, SuperListComponent} from './problem-one';
import {ProblemOneFixComponent, SuperListFixComponent, SuperListDirective} from './problem-one-fix';
import {MainContentProjectionComponent} from './_main.component';
import {ContentChildrenTab1, ContentChildrenTabs, ContentChildrenTabset1} from './tabs1';
import {ContentChildrenDescendants, Pane2, Tab2} from "./descendants";
import {MultiContentModule} from "../multi-content/_multicontent.module";
import { LinquistDirectivesModule } from '../directives-linquist/_linquist-directives.module';

@NgModule({
  imports: [SharedModule, MultiContentModule, LinquistDirectivesModule],
  // exporting it, allows the the component to be used in _multicontent.module.ts
  exports: [
    ContentChildrenTab1, ContentChildrenTabset1, ContentChildrenTabs,
    ContentChildrenDescendants, Pane2, Tab2,
    ProblemOneComponent,
    ProblemOneFixComponent,
  ],
  declarations: [
    MainContentProjectionComponent,
    ProblemOneComponent,
    ProblemOneFixComponent,
    SuperListComponent,
    SuperListFixComponent,
    SuperListDirective,
    ContentChildrenTab1, ContentChildrenTabset1, ContentChildrenTabs,
    ContentChildrenDescendants, Pane2, Tab2
  ],
})
export class ContentChildrenModule {
}

export {MainContentProjectionComponent};
