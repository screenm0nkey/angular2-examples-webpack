import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {NgStyleMainComponent} from './main';
import {NgStyleSampleApp} from './ng-style';

@NgModule({
  imports: [SharedModule],
  declarations: [NgStyleMainComponent, NgStyleSampleApp]
})
export class NgStyleModule {
}

export {NgStyleMainComponent};
