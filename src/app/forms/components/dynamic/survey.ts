import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'survey',
  template: './survey.html'
})
export class FormEightSurvey implements OnInit {
  @Input() model: any;
  form: FormGroup;
  payLoad = null;

  ngOnInit() {
    this.form = this.model.toGroup();
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
