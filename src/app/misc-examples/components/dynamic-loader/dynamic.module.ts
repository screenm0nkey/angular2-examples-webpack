import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {DynamicExamplesMain} from './main';
import {DynamicComponent} from './dynamic-component';
import {GistAppComponent} from './load-component-from-gist';


@NgModule({
  imports: [SharedModule],
  declarations: [
    DynamicExamplesMain,
    DynamicComponent,
    GistAppComponent
  ]
})
export class DynamicModule {
}

export {
  DynamicExamplesMain
}
