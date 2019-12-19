import { NgModule } from "@angular/core";
import { SharedModule } from "../../../shared/_shared.module";
import { HostBindingComponent } from "./_main.component";
import { HostOne, NgModelStatusOne } from "./host-one";
import { HostOnePartTwo, NgModelStatusTwo } from "./host-one-part-2";
import { CountClicks, HostTwo } from "./host-two";
import { HostThree, NgModelStatusThree } from "./host-three";
import { ChickensModule } from '../chickens/_chickens.module';

@NgModule({
  imports: [SharedModule, ChickensModule],
  declarations: [
    HostBindingComponent,
    HostOne,
    NgModelStatusOne,
    HostOnePartTwo,
    NgModelStatusTwo,
    HostTwo,
    CountClicks,
    HostThree,
    NgModelStatusThree
  ]
})
export class HostBindingModule {}

export { HostBindingComponent };
