import {FormControl, FormGroup, Validators} from '@angular/forms';

export class QuestionBase<T> {
  value: T;
  key: string;
  text: string;
  required: boolean;
  order: number;
  type: string;
}

export class DropDownQuestion extends QuestionBase<string> {
  options = [];

  constructor() {
    super();
    this.type = 'dropdown';
  }
}

export class TextboxQuestion extends QuestionBase<string> {
  type: string;

  constructor() {
    super();
    this.type = 'textbox';
  }
}

export class QuestionModel {
  questions = [];

  toGroup() {
    let group: any = {};

    this.questions.forEach(question => {
      if (question.required) {
        group[question.key] = new FormControl('', Validators.required);
      } else {
        group[question.key] = new FormControl('');
      }
    });
    console.log(group);
    return new FormGroup(group);
  }
}
