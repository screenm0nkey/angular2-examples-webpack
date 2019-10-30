import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {ChangeAfterComponent} from './main.component';
import {BComponent, SharedServiceComponent} from './shared-service.component';
import {DComponent, DynamicComponent} from './dynamic.component';
import {EComponent, EventBroadcastingComponent} from './event-broadcasting';

@NgModule({
  imports: [SharedModule],
  declarations: [
    ChangeAfterComponent,
    SharedServiceComponent,
    BComponent,
    EComponent,
    EventBroadcastingComponent,
    DynamicComponent,
    DComponent
  ],
  // You need to use entryComponents under @NgModule.
  // This is for dynamically added components that are added using ViewContainerRef.createComponent()
  entryComponents: [DComponent],
  providers: []
})
export class ChangedAfterModule {
}

export {ChangeAfterComponent};
