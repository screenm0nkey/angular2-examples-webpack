import {Component, Directive} from '@angular/core';
import {ControlGroup, FORM_DIRECTIVES} from '@angular/common';

// expose directive t be used in template. this is what NgForm is doing.
@Directive({
    selector : '[nicksexport]',
    exportAs : 'nicksexport'
})
class Nick {
    public count:Number = 11;
    public call () {return 'NICK'}
}

@Component({
    selector: 'form-one',
    template: require('./form1.html'),
    directives: [FORM_DIRECTIVES, Nick]
})
export class Form1 {
    formStr : String;
    constructor() {console.log(this);}

    onSubmit(ngForm:ControlGroup, nicksexport:any) : void {
        console.log(nicksexport.count === 11)//true
        console.log(nicksexport.call())//NICK
        console.log('form object is an instance of Control Group', ngForm);
        console.log('you submitted value: ', ngForm.value);
        this.formStr = JSON.stringify(ngForm.value);
    }
}