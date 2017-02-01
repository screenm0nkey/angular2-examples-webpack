import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {ChangeDetectionMain} from "./main";
import {MarkForCheck, Cmp} from "./mark-for-check.component";
import {ChangeComponent, TodoItemComponent, TodoListComponent} from "./change.components";
import {ParentChangeObs, ChildObsList} from "./change-with-observables.components";
import {DefaultCmp, OnPushCmp, OnPushChangeDetectionSampleApp} from "./onpush";
import {ObservableChangeDetectionSampleApp, ObservableCmp} from "./observables";

@NgModule({
  imports: [SharedModule],
  declarations: [
    ChangeDetectionMain,
    ChangeComponent,
    MarkForCheck,
    TodoItemComponent,
    TodoListComponent,
    Cmp,
    ParentChangeObs,
    ChildObsList,
    DefaultCmp, OnPushCmp, OnPushChangeDetectionSampleApp,
    ObservableChangeDetectionSampleApp, ObservableCmp
  ]
})
export class ChangeModule {
}

export {ChangeDetectionMain}

