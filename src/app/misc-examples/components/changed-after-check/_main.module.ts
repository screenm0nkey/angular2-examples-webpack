import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {ChangeAfterComponent} from './_main.component';
import {BComponent, SharedServiceComponent} from './shared-service.component';
import {DComponent, DynamicComponent} from './dynamic.component';
import {EComponent, EventBroadcastingComponent} from './event-broadcasting';

@NgModule({
  imports: [SharedModule],
  exports : [
    DynamicComponent, DComponent
  ],
  declarations: [
    ChangeAfterComponent,
    SharedServiceComponent, BComponent,
    EComponent, EventBroadcastingComponent,
    DynamicComponent, DComponent
  ],
  // You need to use entryComponents under @NgModule.
  // This is for dynamically added components that are added using ViewContainerRef.createComponent()
  entryComponents: [DComponent],
  providers: []
})
export class ChangedAfterModule {
}

export {ChangeAfterComponent};
