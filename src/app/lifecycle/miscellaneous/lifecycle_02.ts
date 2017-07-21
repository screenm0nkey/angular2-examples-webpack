import {Component, Input, OnChanges, SimpleChange} from "@angular/core";

@Component({
  selector: 'on-change-2',
  template: `
    <p style="font-weight: bold">The JSON below is the formatted "SimpleChange" object passed into ngOnChanges()</p>
    <pre>{{changes|json}}</pre>
    {{localstring}}
  `
})
export class OnChangeCmp2 implements OnChanges {
  private changes: { [propName: string]: SimpleChange };
  @Input('name') name: string;
  @Input('comment') comment: string;
  private localstring: string;

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    this.changes = changes;
    console.log('Changes', JSON.stringify(changes));
    // notice that this value also updates. not only the @Inputs
    this.localstring = Math.round(Math.random() * 100000) + 'NICK';
  }
}


@Component({
  selector: 'lifecycle-sample-app-2',
  template: `
  <p class="path">/lifecycle/miscellaneous/lifecycle_02</p>
  <h4>ngOnChanges and the SimpleChange object</h4>
  <p>
    It’s important to note that the <strong>ngOnChanges()</strong> hook gets overriden by <strong>ngDoCheck()</strong> 
    so if we implement both, OnChanges will be ignored.
  </p>
  <p><strong>ngOnChanges()</strong> is called when changes occur to @Input whereas <strong>ngDoCheck()</strong> is called every time a system even occurs</p>
  
  <p>Note that ngOnChanges only works on @Input </p>

  <div class="ui form">
    <div class="field" style="float: left;width: 200px">
      <label >Name</label>
      <input type="text" #namefld value="{{name}}" (keyup)="setValues(namefld, commentfld)">
    </div>

    <div class="field" style="float: left;width: 200px">
      <label>Comment</label>
      <textarea rows="1" #commentfld (keyup)="setValues(namefld, commentfld)">{{comment}}</textarea>
    </div>
  </div>

  <on-change-2 [name]="name" [comment]="comment"></on-change-2>
  `
})
export class LifecycleSampleApp2 {
  name: string;
  comment: string;

  constructor() {
    this.name = 'Mr Biscuit';
    this.comment = 'I am learning so much!';
  }

  setValues(namefld, commentfld): void {
    this.name = namefld.value;
    this.comment = commentfld.value;
  }
}



