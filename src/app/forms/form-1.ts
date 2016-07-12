import {Component} from '@angular/core';


@Component({
    selector: 'form-one',
    template: require('./form-1.html')
})
export class FormOne {
    gender:string = 'Female';
    javascript:boolean = false;
    angular:boolean = true;
    csharp:boolean = false;
    name:string = 'Two way bound';

}