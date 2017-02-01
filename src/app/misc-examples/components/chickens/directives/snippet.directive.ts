import {Directive, Input} from "@angular/core";

export interface Snippet {
  id?: number;
  name: string;
  content: string;
}


@Directive({
  selector: '[uiSnippets]',
  host: {
    '(input)': 'onChange($event)' // map the input event to the onChange handler
  }
})
export class UISnippets {
  @Input('uiSnippets') snippetsList: Array<Snippet>;
  private _snippetRegex: RegExp;

  constructor() {
    this._snippetRegex = /(?:^|\W)(\w+)(?!\w)`/g;  // Match on given string with a following `
  }

  onChange($event) {
    if ($event.target.value.match(this._snippetRegex) !== null) {
      $event.target.value = this._getValue($event.target.value);
    }
  }

  private _getValue(value: string) {
    let snippets = value.match(this._snippetRegex);
    snippets.forEach(snippet => {
      value = value.replace(snippet, this._getSnippetContent(snippet));
    });
    return value;
  }

  private _getSnippetContent(snippet) {
    this.snippetsList.forEach(s => {
      if (s.name.toLowerCase() === snippet.trim().replace('`', '').toLowerCase()) {
        snippet = s.content;
      }
    });
    return snippet;
  }
}

