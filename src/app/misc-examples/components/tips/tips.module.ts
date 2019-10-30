import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {TipsMainComponent} from './main';
import {UseNgIfComponent} from './use-ngIf-to-hide';

@NgModule({
  imports: [SharedModule],
  declarations: [
    TipsMainComponent,
    UseNgIfComponent
  ]
})
export class TipsModule {
}

export {TipsMainComponent};
