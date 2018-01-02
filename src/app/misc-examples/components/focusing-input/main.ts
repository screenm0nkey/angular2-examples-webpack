import { Component } from "@angular/core";

@Component({
  selector: "focus-input",
  template: `
      <div class="comps">
        <div><p>These examples are in response to a question posed on stackoverflow
          <a href="http://stackoverflow.com/questions/34502768/why-angular2-template-local-variables-are-not-usable-in-templates-when-using-ng" target="_blank">
            Original Stackoverflow Question
          </a>
        </p>
        <p>The answer to the problem was posted here <a target="_blank" href="http://angularjs.blogspot.co.uk/2016/04/5-rookie-mistakes-to-avoid-with-angular.html">Solution found on Rookie Mistakes</a></p></div>
        <solution-four></solution-four>
        <solution-one></solution-one>
        <solution-two></solution-two>
        <solution-three></solution-three>
      </div>
	`
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
