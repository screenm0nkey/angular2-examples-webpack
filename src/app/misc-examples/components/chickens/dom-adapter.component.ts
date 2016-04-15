import { Component} from 'angular2/core';
import {BrowserDomAdapter} from 'angular2/platform/browser';

@Component({
  selector: 'dom-adapter-component',
  styles : [`.test{
        color:green;
      }`],
  template: `
        <div>
            <button class="mr-button" (click)="add()">BrowserDomAdapter example - Add New Element</button>
        </div> 
        <hr>
    `
})
export class DomAdapterComponent {
  dom:BrowserDomAdapter;
  constructor() {
    this.dom = new BrowserDomAdapter();
  }
  add(){
    // add class to button
    this.dom.addClass(this.dom.query('.mr-button'),"test");
    // create a new element
    var a=this.dom.createElement('button');
    this.dom.on(a, 'click', this.raiseevent);
    this.dom.setInnerHTML(a,'clickme');
    this.dom.appendChild(this.dom.query("dom-adapter-component"),a);
  }
  raiseevent(){
    alert('hi');
  }
}
