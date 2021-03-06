import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/_shared.module';
import { ChangeAfterComponent } from './_main.component';
import { BComponent, SharedServiceComponent } from './shared-service.component';
import { MyInjectableComponent, DynamicComponent } from './dynamic.component';
import { EComponent, EventBroadcastingComponent } from './event-broadcasting';

@NgModule({
  imports: [SharedModule],
  exports: [
    DynamicComponent, MyInjectableComponent
  ],
  declarations: [
    ChangeAfterComponent,
    SharedServiceComponent, BComponent,
    EComponent, EventBroadcastingComponent,
    DynamicComponent, MyInjectableComponent
  ],
  providers: []
})
export class ChangedAfterModule {
}

export { ChangeAfterComponent };
