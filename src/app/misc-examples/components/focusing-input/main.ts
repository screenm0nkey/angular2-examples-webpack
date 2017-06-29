import {Component} from "@angular/core";


@Component({
  selector: 'focus-input',
  template: `
        <p>These examples are in response to a question posed on stackoverflow</p>
        <a href="http://stackoverflow.com/questions/34502768/why-angular2-template-local-variables-are-not-usable-in-templates-when-using-ng" target="_blank">
            Original Stackoverflow Question
        </a>
        <hr>
        <solution-four></solution-four>
        <hr>
        <solution-one></solution-one>
        <hr>
        <solution-two></solution-two>
        <hr>
        <solution-three></solution-three>
	`,
})
export class FocusInput {
  private isVisible: boolean = true;

  appearInput(visible: boolean) {
    this.isVisible = !this.isVisible;
  }

  focusInput(element: any) {
    alert(element);
  }
}
