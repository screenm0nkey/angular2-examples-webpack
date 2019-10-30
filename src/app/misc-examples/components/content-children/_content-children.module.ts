import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {MyComponent, SuperListComponent} from './problem-one';
import {FixMyComponent, FixSuperListComponent, SuperListDirective} from './problem-one-fix';
import {RookieComponent} from './main';
import {ContentChildrenTab1, ContentChildrenTabs1, ContentChildrenTabset1} from './tabs1';
import {ContentChildrenTab2, Pane2, Tab2} from "./tabs2";

@NgModule({
  imports: [SharedModule],
  // exporting it, allows the the component to be used in _multicontent.module.ts
  exports : [
    ContentChildrenTab1, ContentChildrenTabset1, ContentChildrenTabs1,
    ContentChildrenTab2, Pane2, Tab2
  ],
  declarations: [
    RookieComponent,
    MyComponent,
    SuperListComponent,
    FixMyComponent,
    FixSuperListComponent,
    SuperListDirective,
    ContentChildrenTab1, ContentChildrenTabset1, ContentChildrenTabs1,
    ContentChildrenTab2, Pane2, Tab2
  ],
})
export class ContentChildrenModule {
}

export {RookieComponent};
