import {QuestionBase} from './question.model.ts';

export class TextboxQuestion extends QuestionBase<string> {
    type:string;
    controlType = 'textbox';

    constructor() {
        super();
    }
}


export class DropDownQuestion extends QuestionBase<string> {
    options = [];
    controlType = 'dropdown';

    constructor() {
        super();
    }
}