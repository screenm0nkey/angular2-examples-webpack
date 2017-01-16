import {Component, Directive, HostBinding, Input, HostListener} from '@angular/core'

@Directive({
  selector: '[second]'
})
export class Example02Directive {
  @Input() second;

  @HostBinding() get innerText() {
    return this.second
  }

  @HostListener('click', ['$event'])
  onClick($event) {
    this.second = 'clicked'
  }
}

@Component({
  selector: 'basic-02',
  template: `<div></div>`
})
export class Example02BasicComponent {
}

@Component({
  selector: 'example-02',
  template: `
    <h4>Click the text</h4>
    <basic-02 [second]="'Something'"></basic-02>
    <basic-02 [second]="'Another'"></basic-02>
    <basic-02 [second]="'Third'"></basic-02>
  `
})
export class Example02AppComponent {
}
