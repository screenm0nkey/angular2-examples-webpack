import {
  Component,
  Directive,
  HostBinding,
  HostListener,
  Input
} from "@angular/core";

@Directive({
  selector: "[second]"
})
export class Example02Directive {
  @Input() second;

  @HostBinding()
  get innerText() {
    return this.second;
  }

  // this means listen to the click event on the host element and pass in the event argument to the handler
  @HostListener("click", ["$event"])
  onClick($event) {
    this.second = "clicked";
  }
}

/**
 * note how the template works without an empty template.
 * the html element will be <basic-02>
 */
@Component({
  selector: "basic-02",
  template: `
    This text will be replaced by the directive
  `
})
export class Example02BasicComponent {}

@Component({
  selector: "linquist-example-02",
  styles: ["basic-02 {cursor: pointer; text-decoration:underline}"],
  template: `
    <p class="path">misc-examples/components/directives-linquist/example-02</p>
    <h4>Combining directives and components</h4>
    <p>Click each of the words below</p>
    <basic-02 [second]="'Something'"></basic-02>
    <hr>
    <basic-02 [second]="'Another'"></basic-02>
    <hr>
    <basic-02 [second]="'Third'"></basic-02>
  `
})
export class Example02AppComponent {}
