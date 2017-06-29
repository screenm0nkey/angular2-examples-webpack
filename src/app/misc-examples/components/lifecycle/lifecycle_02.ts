import {Component, Input, SimpleChange, OnChanges} from "@angular/core";

@Component({
  selector: 'on-change-2',
  template: `
    <pre>{{jsonText|json}}</pre>
  `
})
export class OnChangeCmp2 implements OnChanges {
  jsonText: any;
  @Input('name') name: string;
  @Input('comment') comment: string;

  ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
    this.jsonText = changes;
    console.log('Changes', JSON.stringify(changes));
  }
}

@Component({
  selector: 'lifecycle-sample-app-2',
  template: `
  <p class="file">src/app/misc-examples/components/lifecycle/lifecycle_02</p>
  <h4>OnChange</h4>

  <div class="ui form">
    <p>It’s important to note that the OnChanges hook gets overriden by DoCheck so if we implement both, OnChanges will be ignored.</p>
    <div class="field">
      <label>Name</label>
      <input type="text" #namefld value="{{name}}" (keyup)="setValues(namefld, commentfld)">
    </div>

    <div class="field">
      <label>Comment</label>
      <textarea rows="1" (keyup)="setValues(namefld, commentfld)" #commentfld>{{comment}}</textarea>
    </div>
  </div>

  <on-change-2 [name]="name" [comment]="comment"></on-change-2>
  `
})
export class LifecycleSampleApp2 {
  display: boolean;
  name: string;
  comment: string;

  constructor() {
    this.display = true;
    this.name = 'Felipe Coury';
    this.comment = 'I am learning so much!';
  }

  setValues(namefld, commentfld): void {
    this.name = namefld.value;
    this.comment = commentfld.value;
  }

  toggle(): void {
    this.display = !this.display;
  }
}



