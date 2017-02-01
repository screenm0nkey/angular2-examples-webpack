import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {FocusInput} from "./main";
import {SolutionOne, FocusMe} from "./solution1";
import {SolutionTwo} from "./solution2";
import {SolutionThree} from "./solution3";
import {SolutionFour} from "./solution4";

@NgModule({
  imports: [SharedModule],
  declarations: [
    FocusInput,
    SolutionOne, FocusMe,
    SolutionTwo,
    SolutionThree,
    SolutionFour
  ]
})
export class FocusingInputModule {
}

export {
  FocusInput
}
