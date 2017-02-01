import {Component} from "@angular/core";

@Component({
  selector: 'focus-input',
  template: `
        <dynamic-component-app></dynamic-component-app>
        <hr>
        <gist-app></gist-app>
        <hr>
        <dynamic-list-app></dynamic-list-app>
    `,
})
export class DynamicExamplesMain {
}
