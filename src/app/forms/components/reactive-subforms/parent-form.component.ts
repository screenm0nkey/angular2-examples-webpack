import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressSubFormComponent } from './address-subform.component';

@Component({
    selector: 'reactive-subform-parent',
    template: `
        <form [formGroup]="customerForm">
            Name : <input type="text" formControlName="name" />
            <address-subform></address-subform>
        </form>
    `
})
export class ParentReactiveSubForm implements OnInit {
    @ViewChild(AddressSubFormComponent, { static: true }) addressForm: AddressSubFormComponent;
    customerForm: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.customerForm = this.fb.group({
            name: ['', [Validators.required]],
            address: this.addressForm.createGroup()
        });
    }
}
