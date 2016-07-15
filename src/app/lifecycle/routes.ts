import {PeekABooParentComponent} from './peekaboo/peekaboo-parent.component.ts';
import {SpyParentComponent} from './spy/spy.component';
import {OnChangesParentComponent} from './on-changes/on-changes-parent.component';
import {AfterViewParentComponent} from './after-view/after-view-parent.component';
import {AfterContentParentComponent} from './after-content/after-content-parent.component';
import {BasicExample} from './basic-overview/index';

export default [
    {path: '', redirectTo: 'overview', terminal: true},
    {path: 'overview', component: BasicExample},
    {path: 'peekaboo', component: PeekABooParentComponent},
    {path: 'spy', component: SpyParentComponent},
    {path: 'on-changes', component: OnChangesParentComponent},
    {path: 'after-view', component: AfterViewParentComponent},
    {path: 'after-content', component: AfterContentParentComponent}
]

