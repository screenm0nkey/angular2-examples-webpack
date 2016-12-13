import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {MiscLifecycleMain} from './main';
import {LifecycleSampleApp1, OnInitCmp1} from './lifecycle_01';
import {LifecycleSampleApp2, OnChangeCmp2} from './lifecycle_02';
import {DoCheckCmp,DoCheckItem} from './lifecycle_03';

@NgModule({
  imports: [SharedModule],
  declarations: [
    MiscLifecycleMain,
    LifecycleSampleApp1, OnInitCmp1,
    LifecycleSampleApp2, OnChangeCmp2,
    DoCheckCmp,DoCheckItem
  ]
})
export class MiscLifecycleModule {
}
export {MiscLifecycleMain}

