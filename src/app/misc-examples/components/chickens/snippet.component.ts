import {Component} from "@angular/core";
import {Snippet} from "./directives/snippet.directive";

@Component({
  selector: "snippet-component",
  styles: ["textarea {width : 300px; font-size : 10px; height:75px;}"],
  template: `
    <p class="file">misc-examples/components/chickens/directives/snippet.directive.ts</p>
    <h4>Text Snippet Directive</h4>
    <p>Type <code>lorem\`</code> for lorem ipsum</p>
    <p>Type <code>zombie\`</code> for zombie ipsum</p>
    <p>Type <code>bacon\`</code> for bacon ipsum</p>
    <textarea [uiSnippets]="mySnippets"></textarea>
  `
})
export class SnippetComponent {
  mySnippets: Snippet[];

  constructor() {
    this.mySnippets = [
      {
        name: "lorem",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing "
      },
      {
        name: "bacon",
        content: "Bacon ipsum dolor amet doner strip steak pastrami "
      },
      {
        name: "zombie",
        content: "Zombie ipsum reversus ab viral inferno, nam rick grimes "
      }
    ];
  }
}
