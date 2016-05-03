import {Component,Input, OnInit} from '@angular/core';
import {FormBuilder, ControlGroup} from '@angular/common';

@Component({
    selector:'survey',
    template:require('./survey.html'),
    providers: [FormBuilder]
})

export class Survey implements OnInit{
    @Input() model : any;
    form : ControlGroup;
    fb: FormBuilder;
    payLoad = null;

    constructor(fb: FormBuilder) {
        this.fb = fb;
    }

    ngOnInit(){
        debugger
        this.form = this.fb.group(this.model.toGroup());
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}