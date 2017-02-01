import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule, JsonpModule} from "@angular/http";


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpModule, JsonpModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpModule, JsonpModule]
})
export class SharedModule {
}

/*
 FormsModule gives us template driven directives such as:
 • ngModel and
 • NgForm
 Whereas ReactiveFormsModule gives us directives like
 • formControl and
 • ngFormGroup
 */
