import {Component,Input, OnInit} from '@angular/core';
import {FormGroup, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';

@Component({
    selector:'survey',
    template:require('./survey.html'),
    directives:[REACTIVE_FORM_DIRECTIVES]
})

export class Survey implements OnInit{
    @Input() model : any;
    form : FormGroup;
    payLoad = null;

    ngOnInit(){
        this.form = this.model.toGroup();
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}