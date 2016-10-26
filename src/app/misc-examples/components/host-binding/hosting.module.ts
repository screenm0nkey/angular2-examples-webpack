import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {HostStuffComponent} from './main';
import {HostOne, NgModelStatusOne} from './host-one';
import {HostOnePartTwo, NgModelStatusTwo} from './host-one-part-2';
import {HostTwo, CountClicks} from './host-two';
import {HostThree, NgModelStatusThree} from './host-three';


@NgModule({
  imports: [SharedModule],
  declarations: [
    HostStuffComponent,
    HostOne, NgModelStatusOne,
    HostOnePartTwo, NgModelStatusTwo,
    HostTwo, CountClicks,
    HostThree, NgModelStatusThree
  ]
})
export class HostStuffModule {
}

export {HostStuffComponent}
