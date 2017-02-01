import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {DynamicExamplesMain} from "./main";
import {GistAppComponent} from "./load-component-from-gist";


@NgModule({
  imports: [SharedModule],
  declarations: [
    DynamicExamplesMain,
    GistAppComponent
  ]
})
export class DynamicModule {
}

export {
  DynamicExamplesMain
}
