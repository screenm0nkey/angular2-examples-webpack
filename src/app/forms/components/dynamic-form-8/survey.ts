import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'survey',
  template: `
    <div>
      <form [formGroup]="myDynamicForm" #f="ngForm" (ngSubmit)="onSubmit()">
        <div *ngFor="let question of model.questions" class="form-row">
          <div class="formHeading">{{question.text}}</div>

          <div [ngSwitch]="question.type">
            <div *ngSwitchCase="'textbox'">
              <input type="{{question.type}}" id="{{question.key}}" [formControlName]="question.key">
            </div>
            <div *ngSwitchCase="'dropdown'">
              <select [formControlName]="question.key">
                <option *ngFor="let o of question.options" [value]="o.key">{{o.value}}</option>
              </select>
            </div>
          </div>

          <div class="errorMessage" *ngIf="!f.form.controls[question.key].valid">*required</div>
        </div>

        <div class="form-row">
          <button type="submit" [disabled]="!f.form.valid">Save</button>
        </div>
      </form>

      <div class="form-row">
        <div *ngIf="payLoad"><highlight>The form contains the following values</highlight></div>
        <div>
          {{payLoad}}
        </div>
      </div>
    </div>
  `
})
export class FormEightSurvey implements OnInit {
  @Input() model: any;
  myDynamicForm: FormGroup;
  payLoad = null;

  ngOnInit() {
    this.myDynamicForm = this.model.toGroup();
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.myDynamicForm.value);
  }
}
