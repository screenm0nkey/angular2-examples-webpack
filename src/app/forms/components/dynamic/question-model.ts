import { FormControl, FormGroup, Validators } from '@angular/forms';

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
