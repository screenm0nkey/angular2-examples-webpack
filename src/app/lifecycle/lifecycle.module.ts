import {NgModule} from '@angular/core';
import {routing} from './lifecycle.routes';
import {SharedModule} from '../shared/shared.module';
import {LifeCycleMainComponent} from './lifecycle.component';
import {BasicExample, MyComponent} from './basic-overview/index';
import {PeekABooParentComponent} from './peekaboo/peekaboo-parent.component.ts';
import {PeekABooComponent} from './peekaboo/peekaboo.component.ts';
import {SpyParentComponent} from './spy/spy.component';
import {OnChangesParentComponent} from './on-changes/on-changes-parent.component';
import {OnChangesComponent} from './on-changes/on-changes.component';
import {AfterViewParentComponent} from './after-view/after-view-parent.component';
import {AfterViewComponent, ChildViewComponent}  from './after-view/after-view.component';
import {AfterContentParentComponent} from './after-content/after-content-parent.component';
import {AfterContentComponent, ChildComponent} from './after-content/after-content.component'
import {Spy} from './spy/spy.directive';


@NgModule({
  imports: [routing, SharedModule],
  declarations: [
    LifeCycleMainComponent,
    BasicExample, MyComponent,
    PeekABooParentComponent, PeekABooComponent,
    SpyParentComponent,
    AfterViewParentComponent, ChildViewComponent, AfterViewComponent,
    OnChangesParentComponent, OnChangesComponent,
    AfterContentParentComponent, AfterContentComponent, ChildComponent,
    Spy
  ]
})
export class LifeCycleModule {
}
