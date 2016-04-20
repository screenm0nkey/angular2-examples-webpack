import {Component} from 'angular2/core';
import {Survey} from './survey.component';
import {QuestionModel} from './question.model.ts';
import {TextboxQuestion, DropDownQuestion} from './questions.model.ts';

@Component({
    selector:'survey-demo',
    template:`
        <div>
            <h2>Survey using Dynamic Form</h2>
            <a href="http://www.syntaxsuccess.com/viewarticle/dynamic-form-in-angular-2.0" target="_blank">Taken from Syntax Success</a>
            <survey [model]="questionModel"></survey>
        </div>
    `,
    directives:[Survey]
})

export class SurveyDemo {

    questionModel = new QuestionModel();

    constructor(){
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
        ddQuestion.options.push({key:'usa',value:'USA'});
        ddQuestion.options.push({key:'germany',value:'Germany'});
        ddQuestion.options.push({key:'canada',value:'Canada'});
        ddQuestion.options.push({key:'australia',value:'Australia'});
        ddQuestion.order = 4;
        this.questionModel.questions.push(ddQuestion);

        this.questionModel.questions.sort((a,b) => a.order - b.order);
    }
}