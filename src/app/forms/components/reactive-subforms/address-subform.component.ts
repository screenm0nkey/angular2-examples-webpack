import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'address-subform',
    template: `
    <form [formGroup]="addressFormGroup">
        Street :<input type="text" formControlName="street" /> <br>
        City :<input type="text" formControlName="city" /> <br>
    </form>
    `
})
export class AddressSubFormComponent {
    addressFormGroup: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    createGroup() {
        this.addressFormGroup = this.fb.group({
            street: ['', [Validators.required]],
            city: ['', [Validators.required]],
        });
        return this.addressFormGroup;
    }
}
