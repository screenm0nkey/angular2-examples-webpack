import {NgModule} from '@angular/core';
import {LifeCycleRoutingModule} from './lifecycle.routes.module';
import {SharedModule} from '../shared/_shared.module';
import {LifeCycleMainComponent} from './lifecycle.component';
import {BasicExample, MyComponent} from './basic-overview';
import {PeekABooParentComponent} from './peekaboo/peekaboo-parent.component';
import {PeekABooComponent} from './peekaboo/peekaboo.component';
import {SpyParentComponent} from './spy/spy.component';
import {OnChangesParentComponent} from './on-changes/on-changes-parent.component';
import {OnChangesComponent} from './on-changes/on-changes.component';
import {AfterViewParentComponent} from './after-view/after-view-parent.component';
import {AfterViewComponent, ChildViewComponent} from './after-view/after-view.component';
import {AfterContentParentComponent} from './after-content/after-content-parent.component';
import {AfterContentComponent, ChildComponent} from './after-content/after-content.component';
import {Spy} from './spy/spy.directive';
import {MiscLifecycleModule} from './miscellaneous/lifecycle.module';

@NgModule({
  imports: [SharedModule, LifeCycleRoutingModule, MiscLifecycleModule],
  declarations: [
    LifeCycleMainComponent,
    BasicExample,
    MyComponent,
    PeekABooParentComponent,
    PeekABooComponent,
    SpyParentComponent,
    AfterViewParentComponent,
    ChildViewComponent,
    AfterViewComponent,
    OnChangesParentComponent,
    OnChangesComponent,
    AfterContentParentComponent,
    AfterContentComponent,
    ChildComponent,
    Spy
  ],
  exports : [
    BasicExample
  ]
})
export class LifeCycleModule {
}
