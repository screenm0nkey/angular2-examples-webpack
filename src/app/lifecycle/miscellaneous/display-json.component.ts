import {Component, Input, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'display-json-component',
  template: `
    <div style='background-color: #949494; padding: 5px;
    border: solid 2px darkgreen;
    width: 447px;
    margin-left: 209px;'>
      <p>The JSON below is the formatted <code>SimpleChange</code> object passed into <code>ngOnChanges()</code></p>
      <code>{{changes|json}}</code>
    </div>
    
  `
})
export class DisplayJsonComponent implements OnChanges {
  public changes: { [propName: string]: SimpleChange };
  public localstring: string;
  @Input('name') name: string;
  @Input('comment') comment: string;

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    this.changes = changes;
    console.log('Changes', JSON.stringify(changes));
  }
}
