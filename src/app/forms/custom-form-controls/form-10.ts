import {Component} from '@angular/core';
import {TemplateDrivenComponent} from  './template-driven';
import {ModelDrivenComponent} from  './model-driven';

@Component({
    selector: 'form-ten-component',
    directives : [TemplateDrivenComponent, ModelDrivenComponent],
    template: `
        <template-driven></template-driven>
        <hr>
        <model-driven></model-driven>        
    `
})
export class FormTen {
}