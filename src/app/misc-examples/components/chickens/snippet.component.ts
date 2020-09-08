import { Component } from '@angular/core';
import { Snippet } from './directives/snippet.directive';

@Component({
  selector: 'snippet-component',
  styles: ['textarea {width : 300px; font-size : 10px; height:75px;}'],
  template: `
    <p class="path">misc-examples/components/chickens/directives/snippet.directive.ts</p>
    <h4>Text Snippet Directive</h4>

    Type either bacon, zombie, or car into the textarea followed by a \`, for example <strong>bacon\`</strong> 
    
    <textarea [uiSnippets]='mySnippets'></textarea>
  `
})
export class SnippetComponent {
  mySnippets: Snippet[];

  constructor() {
    this.mySnippets = [
      {
        name: 'lorem',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing '
      },
      {
        name: 'bacon',
        content: 'Bacon ipsum dolor amet doner strip steak pastrami '
      },
      {
        name: 'zombie',
        content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes '
      }
    ];
  }
}
