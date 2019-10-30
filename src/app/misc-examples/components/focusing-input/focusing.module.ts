import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {FocusInput} from './main';
import {FocusMe, SolutionOne} from './solution1';
import {FocusIt, SolutionTwo} from './solution2';
import {SolutionThree} from './solution3';
import {SolutionFour} from './solution4';

@NgModule({
  imports: [SharedModule],
  declarations: [
    FocusInput,
    SolutionOne,
    FocusMe,
    SolutionTwo,
    FocusIt,
    SolutionThree,
    SolutionFour
  ]
})
export class FocusingInputModule {
}

export {FocusInput};
