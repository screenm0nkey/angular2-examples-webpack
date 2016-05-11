import {Validators} from '@angular/common';

export class QuestionBase<T> {
    value:T;
    key:string;
    text:string;
    required:boolean;
    order:number;
    controlType:string;
}

export class QuestionModel {
    public questions:QuestionBase<string>[] = [];

    toGroup() {
        let group = {};

        this.questions.forEach(question => {
            group[question.key] = [''];
            if (question.required) {
                group[question.key].push(Validators.required);
            }
        });

        return group;
    }
}