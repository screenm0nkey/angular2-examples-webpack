import {Component, Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[second]',
})
export class Example02Directive {
  @Input() second;

  @HostBinding()
  get innerText() {
    return this.second;
  }

  @HostListener('click', ['$event'])
  onClick($event) {
    console.log($event);
    this.second = 'clicked';
  }
}

/**
 * note how the template works without an empty template.
 * the html element will be <basic-02>
 */
@Component({
  selector: 'basic-02',
  template: ``
})
export class Example02BasicComponent {
}

@Component({
  selector: 'example-02',
  styles: ['basic-02 {cursor: pointer; text-decoration:underline}'],
  template: `
    <p class='path'>src/app/misc-examples/components/directives-linquist/example-02</p>
    <h4>Combining directives</h4>
    <p>Click the text below</p>
    <basic-02 [second]="'Something'"></basic-02>
    <basic-02 [second]="'Another'"></basic-02>
    <basic-02 [second]="'Third'"></basic-02>
  `
})
export class Example02AppComponent {
}
