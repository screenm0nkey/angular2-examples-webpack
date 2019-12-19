import {NgModule} from '@angular/core';
import {SharedModule} from "../../../shared/_shared.module";
import {DynamicMainComponent} from "./_main.component";
import {ChickensModule} from "../chickens/_chickens.module";
import { LinquistDirectivesModule } from '../directives-linquist/_linquist-directives.module';
export {DynamicMainComponent};

@NgModule({
  imports: [
    SharedModule, ChickensModule, LinquistDirectivesModule,
  ],
  declarations: [
    DynamicMainComponent
  ]
})
export class DynamicExamplesModule {
}

