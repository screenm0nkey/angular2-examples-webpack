import {Component} from '@angular/core';

import {ToKebabcaseRendererComponent} from './one-renderer.component';
import {ToSnakecaseRendererComponent} from './two-renderer.component';

@Component({
  selector: 'dynamic-list-app',
  template: `
        <h4>Dynamic List {{num}}</h4>
        <a href="http://www.stackoverflow.com/a/37232017/370935" target="_blank">
            stackoverflow.com/a/37232017/370935
        </a>
        <form>
            <label for="case">Select a case</label>
            <select #sel (change)="changeComponent(sel.value)" id="case">
                <option *ngFor="let component of components">
                    {{component}}
                </option>
            </select>
        </form>
        <dynamic-list [items]="items" [renderer]="renderer"></dynamic-list>
    `,
})
export class DynamicListAppComponent {
  components: string[] = ['Snake', 'Kebab'];
  items: string[] = ['one', 'two', 'three'];
  renderer: any; //Renderer; Note: this should be Renderer not any but TS is bitching
  constructor() {
    this.changeComponent(this.components[0]);
  }

  changeComponent(name) {
    this.renderer = name === 'Snake' ? ToSnakecaseRendererComponent : ToKebabcaseRendererComponent;
  }
}
