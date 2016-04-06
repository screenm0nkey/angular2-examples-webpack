import { Component } from 'angular2/core';
import {
    FormBuilder,
    Validators,
    Control,
    ControlGroup,
    FORM_DIRECTIVES
} from 'angular2/common';

interface ValidationResult {
    [key:string]:boolean;
}

class UsernameValidator {
    static startsWithNumber(control:Control):ValidationResult {
        if (control.value != "" && !isNaN(control.value.charAt(0))) {
            return {"startsWithNumber": true};
        }
        return null;
    }
    static usernameTaken(control:Control):Promise<ValidationResult> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "nick") {
                    resolve({"usernameTaken": true})
                } else {
                    resolve(null);
                };
            }, 1000);
        });
    }
}


@Component({
    selector: 'form-four',
    template: require('./form4.html'),
    directives: [FORM_DIRECTIVES]
})
export class Form4 {
    form:ControlGroup;
    username:Control;

    constructor(private fb:FormBuilder) {
        this.username = new Control(
            "",
            Validators.compose([Validators.required, UsernameValidator.startsWithNumber]),
            UsernameValidator.usernameTaken
        );
        this.form = fb.group({
            username: this.username
        });
    }
    submitData() {
        console.log(JSON.stringify(this.form.value))
    }
};