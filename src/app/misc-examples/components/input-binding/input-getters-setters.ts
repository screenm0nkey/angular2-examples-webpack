import {Component, Input} from "@angular/core";
@Component({
  selector: 'name-child',
  template: `
    <h5>"{{name}}"</h5>
  `
})
export class NameChildComponent {
  _name: string = '<no name set>';

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  get name() {
    return this._name;
  }
}


@Component({
  selector: 'name-parent',
  template: `
    <h4>Using Getters and Setter on @Input</h4>
    <pre>@Input() set name(name: string)</pre>
    There are {{names.length}} names
    <name-child *ngFor="let name of names" [name]="name"></name-child>
  `
})
export class NameParentComponent {
  // Displays 'Mr. IQ', '<no name set>', 'Bombasto'
  names = ['Mr. IQ', '   ', '  Bombasto  '];
}

