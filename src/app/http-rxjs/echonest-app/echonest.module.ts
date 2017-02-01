import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {ArtistComponent, EchonestAppComponent} from "./echonest-app";
import {DropdownComponent} from "./dropdown";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    EchonestAppComponent,
    ArtistComponent,
    DropdownComponent,
  ]
})
export class EchonestModule {
}
export {EchonestAppComponent}
