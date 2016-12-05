import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {ImmutableMain} from './main';
import {ImmutableObject, TestComponentObject} from './immutable-object';
import {ImmutableList, TestComponentList} from './immutable-list';
import {Store} from './StoreService';

@NgModule({
  imports: [SharedModule],
  declarations: [
    ImmutableMain,
    ImmutableObject, TestComponentObject,
    ImmutableList, TestComponentList
  ],
  providers: [Store],
})
export class ImmutableModule {
}

export {ImmutableMain}
