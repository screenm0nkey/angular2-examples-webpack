import {Component, Directive} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, NgForm} from '@angular/forms';

// expose directive to be used in template. this is what NgForm is doing.
@Directive({
    selector: '[formnick]',
    exportAs: 'ngNickForm'
})
class FormNick {
    public count:Number = 11;

    public call() {
        console.log('NICK');
    }
}

@Component({
    selector: 'form-two',
    template: require('./form-2.html'),
    directives : [REACTIVE_FORM_DIRECTIVES, FormNick]
})
export class FormTwo {
    firstname : string = 'Hello';
    lastname : string = 'World';
    employee:any = {'first_name': 'kara'};
    formStr:string ='';

    logForm(form:NgForm, nick:FormNick){
        this.formStr = JSON.stringify(form.value);
        console.log(this);
        console.log(form);
        console.log(nick);
        nick.call();
    }
}
