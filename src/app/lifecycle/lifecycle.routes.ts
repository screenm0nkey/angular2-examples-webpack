import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LifeCycleMainComponent} from './lifecycle.component';
// children
import {BasicExample} from './basic-overview/index';
import {PeekABooParentComponent} from './peekaboo/peekaboo-parent.component.ts';
import {SpyParentComponent} from './spy/spy.component';
import {OnChangesParentComponent} from './on-changes/on-changes-parent.component';
import {AfterViewParentComponent} from './after-view/after-view-parent.component';
import {AfterContentParentComponent} from './after-content/after-content-parent.component';


const routes: Routes = [
  {
    path: 'lifecycle',
    component: LifeCycleMainComponent,
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: BasicExample},
      {path: 'peekaboo', component: PeekABooParentComponent},
      {path: 'spy', component: SpyParentComponent},
      {path: 'on-changes', component: OnChangesParentComponent},
      {path: 'after-view', component: AfterViewParentComponent},
      {path: 'after-content', component: AfterContentParentComponent}
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

