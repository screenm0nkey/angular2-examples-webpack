import {Component } from 'angular2/core';
import {SolutionOne} from './solution1';
import {SolutionTwo} from './solution2';
import {SolutionThree} from './solution3';

@Component({
    selector: 'focus-input',
    template: `
        <p>These examples are in response to a question posed on stackoverflow</p>
        <a href="http://stackoverflow.com/questions/34502768/why-angular2-template-local-variables-are-not-usable-in-templates-when-using-ng" target="_blank">Link</a>
        <solution-one></solution-one>
        <hr>
        <solution-two></solution-two>
        <hr>
        <solution-three></solution-three>
	`,
    directives:[SolutionOne, SolutionTwo, SolutionThree]
})
export class FocusInput {
    private isVisible:Boolean = true;

    appearInput(visible:Boolean){
        this.isVisible = !this.isVisible;
    }
    focusInput(element: any){
        alert(element);
    }
}
