import { Component, Directive, Input } from '@angular/core';

interface Snippet {
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
        debugger
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


@Component({
    selector: 'snippet-component',
    directives: [UISnippets],
    styles : ['textarea {width : 300px; font-size : 10px; height:75px;}'],
    template : `
        <h4>Text Snippet Directive</h4>
        <p>Type <code>lorem\`</code> for lorem ipsum</p>
        <p>Type <code>zombie\`</code> for zombie ipsum</p>
        <p>Type <code>bacon\`</code> for bacon ipsum</p>
        <textarea [uiSnippets]="mySnippets"></textarea>
    `
})
export class SnippetComponent {
    mySnippets : Snippet[];
    constructor() {
        this.mySnippets = [{
            name: 'lorem',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            name: 'bacon',
            content: 'Bacon ipsum dolor amet doner strip steak pastrami, hamburger sirloin spare ribs andouille. Salami drumstick strip steak ground round pork loin pastrami pancetta porchetta andouille pork chop short loin. Beef ground round t-bone shank leberkas flank filet mignon boudin meatball jowl short ribs.'
        },
        {
            name: 'zombie',
            content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
        }];
    }
}