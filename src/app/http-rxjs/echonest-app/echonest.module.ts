import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { EchonestAppComponent } from "./echonest.component";
import { ArtistComponent } from "./artist.component";
import { DropdownComponent } from "./dropdown.component";
import { EchonestRepo } from "./echonest.repo";

@NgModule({
  imports: [SharedModule],
  declarations: [EchonestAppComponent, ArtistComponent, DropdownComponent],
  providers: [EchonestRepo]
})
export class EchonestModule {}

export { EchonestAppComponent };
