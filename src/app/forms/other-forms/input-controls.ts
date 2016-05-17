import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {
    ComponentInstruction,
    CanReuse
} from '@angular/router-deprecated';

@Component({
    selector: 'input-controls',
    template: require('./input-controls.html'),
    directives:[FORM_DIRECTIVES]
})

export class InputControls implements CanReuse {

    gender:string;
    javascript = false;
    angular = false;
    csharp = false;
    name = 'Two way bound';

    routerCanReuse(next: ComponentInstruction, prev: ComponentInstruction) { return false; }
}