import { NgModule } from "@angular/core";
import { SharedModule } from "../../../shared/_shared.module";
import { TipsMainComponent } from "./_main.component";
import { UseNgIfComponent } from "./use-ngIf-to-hide";
import { DosAndDontsComponent } from "./dos-and-donts.component";

@NgModule({
  imports: [SharedModule],
  declarations: [TipsMainComponent, UseNgIfComponent, DosAndDontsComponent]
})
export class TipsModule {}

export { TipsMainComponent };
