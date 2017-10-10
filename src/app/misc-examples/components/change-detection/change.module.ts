import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {ChangeDetectionMain} from "./main";
import {MarkForCheck} from "./mark-for-check.component";
import {DetectChanges} from "./detect-changes";
import {ChangeComponent, TodoItemComponent, TodoListComponent} from "./change.components";
import {ChildObsList, ParentChangeObs} from "./observables.components";
import {DefaultCmp, OnPushChangeDetectionSampleApp, OnPushCmp} from "./onpush";
import {ObservableChangeDetectionSampleApp, ObservableCmp} from "./observables";
import {ImmutableObject, TestComponentObject} from "./immutable-object";
import {ImmutableList, TestComponentList} from "./immutable-list";
import {Store} from "./StoreService";

/*
 * The "Store" service dependency for the components below has to be a injected as a dependency
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
    DefaultCmp, OnPushCmp, OnPushChangeDetectionSampleApp,
    ObservableChangeDetectionSampleApp, ObservableCmp,
    ImmutableObject, TestComponentObject,
    ImmutableList, TestComponentList
  ],
  providers: [Store],
})
export class ChangeModule {
}

export {ChangeDetectionMain}

