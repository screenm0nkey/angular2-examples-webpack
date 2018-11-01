import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LifeCycleMainComponent} from './lifecycle.component';
import {BasicExample} from './basic-overview';
import {PeekABooParentComponent} from './peekaboo/peekaboo-parent.component';
import {SpyParentComponent} from './spy/spy.component';
import {OnChangesParentComponent} from './on-changes/on-changes-parent.component';
import {AfterViewParentComponent} from './after-view/after-view-parent.component';
import {AfterContentParentComponent} from './after-content/after-content-parent.component';
import {MiscLifecycleMain} from './miscellaneous/lifecycle.module';

const formsRoutes: Routes = [
  {
    path: '',
    component: LifeCycleMainComponent,
    children: [
      {path: '', redirectTo: 'misc', pathMatch: 'full'},
      {path: 'misc', component: MiscLifecycleMain},
      {path: 'basic', component: BasicExample},
      {path: 'peekaboo', component: PeekABooParentComponent},
      {path: 'spy', component: SpyParentComponent},
      {path: 'on-changes', component: OnChangesParentComponent},
      {path: 'after-view', component: AfterViewParentComponent},
      {path: 'after-content', component: AfterContentParentComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(formsRoutes)]
})
export class LifeCycleRoutingModule {
}
