import {Component} from '@angular/core';
// import {BrowserDomAdapter} from '@angular/platform-browser';
import {BrowserDomAdapter} from '@angular/platform-browser/src/browser/browser_adapter'; // bug fix


@Component({
    selector: 'dom-adapter-component',
    styles: [`.test{
        color:green;
      }`],
    template: `
        <div>
            <h4>
                BrowserDomAdapter is the api to use to interact with the DOM<br>
            </h4>
            
            <p style="color: red; font-weight: bold;">BrowserDomAdapter is not supposed to be used. It's for Angular internal use only.</p>
            
            <button class="mr-button" (click)="add($event)">
                BrowserDomAdapter example - Click to Add New Element
            </button>
        </div> 
    `
})
export class DomAdapterComponent {
    dom:BrowserDomAdapter;

    constructor() {
        this.dom = new BrowserDomAdapter();
    }

    add() {
        // add class to button
        this.dom.addClass(this.dom.query('.mr-button'), "test");
        // create a new element
        var a = this.dom.createElement('button');
        this.dom.on(a, 'click', this.raiseEvent);
        this.dom.setInnerHTML(a, 'Click Me');
        this.dom.appendChild(this.dom.query("dom-adapter-component"), a);
    }

    raiseEvent(evt) {
        alert('hi ' + evt.target.tagName);
    }
}
