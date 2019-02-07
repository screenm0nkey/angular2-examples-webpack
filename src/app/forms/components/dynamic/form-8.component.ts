import {Component} from '@angular/core';
import {QuestionModel} from './question-model';
import {TextboxQuestion} from './textbox-question';
import {DropDownQuestion} from './dropdown-question';

@Component({
  selector: 'survey-demo',
  template: `
        <div>
          <p class='path'>forms/components/dynamic/form-8.component.ts</p>
            <h4>Survey using Dynamic Form</h4>
            <survey [model]='questionModel'></survey></div>
        `
})
export class FormEightComponent {
  questionModel = new QuestionModel();

  constructor() {
    let question = new TextboxQuestion();
    question.key = 'lastName';
    question.text = 'Last name';
    question.required = true;
    question.order = 2;
    this.questionModel.questions.push(question);

    question = new TextboxQuestion();
    question.key = 'firstName';
    question.text = 'First name';
    question.required = true;
    question.order = 1;
    this.questionModel.questions.push(question);

    question = new TextboxQuestion();
    question.key = 'emailAddress';
    question.text = 'Email';
    question.required = false;
    question.type = 'email';
    question.order = 3;
    this.questionModel.questions.push(question);

    let ddQuestion = new DropDownQuestion();
    ddQuestion.key = 'country';
    ddQuestion.text = 'Country';
    ddQuestion.options.push({key: 'usa', value: 'USA'});
    ddQuestion.options.push({key: 'germany', value: 'Germany'});
    ddQuestion.options.push({key: 'canada', value: 'Canada'});
    ddQuestion.options.push({key: 'australia', value: 'Australia'});
    ddQuestion.order = 4;
    this.questionModel.questions.push(ddQuestion);

    this.questionModel.questions.sort((a, b) => a.order - b.order);
  }
}
