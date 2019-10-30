import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {HostBindingComponent} from './main';
import {HostOne, NgModelStatusOne} from './host-one';
import {HostOnePartTwo, NgModelStatusTwo} from './host-one-part-2';
import {CountClicks, HostTwo} from './host-two';
import {HostThree, NgModelStatusThree} from './host-three';

@NgModule({
  imports: [SharedModule],
  declarations: [
    HostBindingComponent,
    HostOne,
    NgModelStatusOne,
    HostOnePartTwo,
    NgModelStatusTwo,
    HostTwo,
    CountClicks,
    HostThree,
    NgModelStatusThree
  ]
})
export class HostBindingModule {
}

export {HostBindingComponent};
