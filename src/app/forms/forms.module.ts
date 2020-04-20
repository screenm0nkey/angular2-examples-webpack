import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/_shared.module';
import { FormsRoutingModule } from './forms.routes.module';
import { FormExamplesComponent } from './forms.component';
import { FormElevenModule } from './components/dynamic-form-11/_form-11.module';
import { FormEightModule } from './components/dynamic-form-8/_form-8.module';
import { FormOneComponent } from './components/form-1';
import { FormTwoComponent, NickForm } from './components/form-2';
import { FormThreeComponent } from './components/form-3';
import { FormFourComponent } from './components/form-4';
import { FormFiveComponent } from './components/form-5';
import { FormSixComponent } from './components/form-6';
import { FormNineComponent } from './components/form-9';
import { FormSevenModule } from './components/custom-validator-directives/form-7.module';
import { FormTenModule } from './components/custom-form-controls/_form-10.module';
import { FormTwelveComponent } from './components/guide-to-form-array/form-12';
import { FormThirteenComponent } from './components/guide-to-form-array/form-13';
import { GuideToFormArrayComponent } from './components/guide-to-form-array/guide-to-form-array.component';
import { FormFourteenComponent } from './components/guide-to-form-array/form-14';
import { FormFifteenComponent } from './components/guide-to-form-array/form-15';
import { FormSixteenComponent } from './components/guide-to-form-array/form-16';
import { FormErrorAppModule } from './components/magical-error-messages/_app.module';

@NgModule({
  imports: [
    SharedModule,
    FormsRoutingModule,
    SharedModule,
    FormSevenModule,
    FormEightModule,
    FormTenModule,
    FormElevenModule,
    FormErrorAppModule,
  ],
  declarations: [
    FormExamplesComponent,
    FormOneComponent,
    // NickForm is used in FormTwoComponent to show exportAs and what NgForm is doing in #form='ngForm'
    FormTwoComponent, NickForm,
    FormThreeComponent,
    FormFourComponent,
    FormFiveComponent,
    FormSixComponent,
    FormNineComponent,
    GuideToFormArrayComponent, FormTwelveComponent, FormThirteenComponent, 
    FormFourteenComponent,
    FormFifteenComponent,
    FormSixteenComponent,
  ]
})
export class NickFormsModule {
}
