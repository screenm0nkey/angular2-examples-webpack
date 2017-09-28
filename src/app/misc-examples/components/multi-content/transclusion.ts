import {Component} from "@angular/core";

@Component({
  selector: '[message]',
  inputs: ['header'],
  host: {
    'class': 'ui message' // add class to host element
  },
  template: `
  <div>
    <div class="header">{{ header }}</div>
    <p style="border: solid pink">
      <ng-content></ng-content>
    </p>
  </div>
  `
})
export class Message {
  header: string;

  ngOnInit(): void {
    console.log('header', this.header);
  }
}

@Component({
  selector: 'transclusion-simple',
  template: `
  <p class="file">misc-examples/components/multi-content/transclusion.ts</p>
  <h4>Using Input and Transclusion on a directive</h4>
  <div message header="This message was inserted using @Input">
    This content was inserted using transclusion
  </div>
  `
})
export class TransclusionSampleApp {
}


