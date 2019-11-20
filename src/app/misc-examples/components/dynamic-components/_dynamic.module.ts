import {NgModule} from '@angular/core';
import {SharedModule} from "../../../shared/_shared.module";
import {DynamicMainComponent} from "./_main.component";
import {ChickensModule} from "../chickens/_chickens.module";
export {DynamicMainComponent};

@NgModule({
  imports: [
    SharedModule, ChickensModule,
  ],
  declarations: [
    DynamicMainComponent
  ]
})
export class DynamicExamplesModule {
}

