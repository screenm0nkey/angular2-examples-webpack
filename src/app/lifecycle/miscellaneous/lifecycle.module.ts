import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MiscLifecycleMain } from './main.component';
import { LifecycleSampleApp1, OnInitCmp1 } from './lifecycle_01';
import { LifecycleSampleApp2 } from './lifecycle_02';
import { DisplayJsonComponent } from './display-json.component';
import { DoCheckCmp, DoCheckItem } from './lifecycle_03';
import { AftersCmp, LifecycleSampleApp4 } from './lifecycle_04';

@NgModule({
  imports: [SharedModule],
  declarations: [
    MiscLifecycleMain,
    LifecycleSampleApp1,
    OnInitCmp1,
    LifecycleSampleApp2,
    DisplayJsonComponent,
    DoCheckCmp,
    DoCheckItem,
    LifecycleSampleApp4,
    AftersCmp
  ]
})
export class MiscLifecycleModule {}

export { MiscLifecycleMain };
