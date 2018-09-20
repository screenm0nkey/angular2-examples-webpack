import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsRoutingModule } from './forms.routes.module';
import { FormExamplesComponent } from './forms.component';
import { FormOneComponent } from './components/form-1';
import { FormTwoComponent, NickForm } from './components/form-2';
import { FormThreeComponent } from './components/form-3';
import { FormFourComponent } from './components/form-4';
import { FormFiveComponent } from './components/form-5';
import { FormSixComponent } from './components/form-6';
import { FormNineComponent } from './components/form-9';
import { FormSevenModule } from './components/custom-validator-directives/form-7.module';
import { FormEightModule } from './components/dynamic/form-8.module';
import { FormTenModule } from './components/custom-form-controls/form-10.module';

@NgModule({
  imports: [
    SharedModule,
    FormsRoutingModule,
    SharedModule,
    FormSevenModule,
    FormEightModule,
    FormTenModule
  ],
  declarations: [
    FormExamplesComponent,
    FormOneComponent,
    FormTwoComponent,
    NickForm, // used in form 2 to show exportAs and what NgForm is doing in #form='ngForm'
    FormThreeComponent,
    FormFourComponent,
    FormFiveComponent,
    FormSixComponent,
    FormNineComponent
  ]
})
export class NickFormsModule {}
