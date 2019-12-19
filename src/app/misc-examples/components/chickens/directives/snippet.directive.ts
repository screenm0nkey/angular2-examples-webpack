import {Directive, Input} from '@angular/core';

export interface Snippet {
  id?: number;
  name: string;
  content: string;
}

@Directive({
  selector: '[uiSnippets]',
  host: {
    '(input)': 'onTextareaChange($event)' // map the input event to the onTextareaChange handler
  }
})
export class UISnippets {
  @Input('uiSnippets') snippetsList: Array<Snippet>;
  private _snippetRegex: RegExp;

  constructor() {
    // W is anything not a word
    this._snippetRegex = /(?:^|\W)(\w+)(?!\w)`/g; // Match on given string with a following `
  }

  onTextareaChange({target}) {
    if (target.value.match(this._snippetRegex) !== null) {
      target.value = this._getValue(target.value);
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
      if (
        s.name.toLowerCase() ===
        snippet
          .trim()
          .replace('`', '')
          .toLowerCase()
      ) {
        snippet = s.content;
      }
    });
    return snippet;
  }
}
