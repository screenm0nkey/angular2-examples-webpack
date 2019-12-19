import {Component} from '@angular/core';

@Component({
  selector: 'lifecycle-sample-app-2',
  template: `
  <p class='path'>/lifecycle/miscellaneous/lifecycle_02</p>
  <h4>ngOnChanges and the SimpleChange object</h4>
  <p class='highlight'>
    It’s important to note that the <code>ngOnChanges()</code> hook gets overriden by <code>ngDoCheck()</code> 
    so if we implement both, OnChanges will be ignored.
  </p>
  <p><code>ngOnChanges()</code> is called when changes occur to @Input</p>
  <p><code>ngDoCheck()</code> is called every time a system even occurs</p>
  
  <p class='highlight'>Note that <code>ngOnChanges</code> only works on <code>@Input</code> </p>

  <div class='ui form'>
    <div class='field' style='float: left;width: 200px'>
      <label >Name</label>
      <input type='text' #namefld value='{{name}}' (keyup)='setValues(namefld, commentfld)'>
    </div>
    <div class='field' style='float: left;width: 200px'>
      <label>Comment</label>
      <textarea rows='1' #commentfld (keyup)='setValues(namefld, commentfld)'>{{comment}}</textarea>
    </div>
  </div>

  <display-json-component [name]='name' [comment]='comment'></display-json-component>
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
