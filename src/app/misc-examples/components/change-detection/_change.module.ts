import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {MarkForCheck} from './mark-for-check.component';
import {DetectChanges} from './detect-changes.component';
import {DefaultCmp, OnPushChangeDetectionSampleApp, OnPushCmp} from './on-push.component';
import {ImmutableList, TestComponentList} from './immutable-list.component';
import { ChangeDetectionMain } from './_index.component';
import { ChangeComponent } from './local-ref-vs-ng-model/change.components';
import { TodoItemComponent } from './local-ref-vs-ng-model/todo-item.component';
import { TodoListComponent } from './local-ref-vs-ng-model/todo-list.component';
import { ImmutableObject, TestComponentObject } from './immutable-object.component';
import { ParentChangeObs, ChildObsList } from './observables.component';
import { ObservableChangeDetectionSampleApp, ObservableCmp } from './observables-mark-for-check.component';

/*
 * The 'Store' service dependency for the components below has to be a injected as a dependency
 * in the parent component for the the store to work. doing at each component produces a new
 * instance of the store.
 * */
@NgModule({
  imports: [SharedModule],
  declarations: [
    ChangeDetectionMain,
    ChangeComponent,
    MarkForCheck,
    DetectChanges,
    TodoItemComponent,
    TodoListComponent,
    ParentChangeObs,
    ChildObsList,
    DefaultCmp,
    OnPushCmp,
    OnPushChangeDetectionSampleApp,
    ObservableChangeDetectionSampleApp,
    ObservableCmp,
    ImmutableObject,
    TestComponentObject,
    ImmutableList,
    TestComponentList
  ]
})
export class ChangeModule {
}

export {ChangeDetectionMain};
