import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTenComponent } from './components/custom-form-controls/_form-10.module';
import { FormSevenComponent } from './components/custom-validator-directives/form-7.module';
import { FormElevenComponent } from './components/dynamic-form-11/main.component';
import { FormEightComponent } from './components/dynamic-form-8/_form-8.module';
import { FormOneComponent } from './components/form-1';
import { FormTwoComponent } from './components/form-2';
import { FormThreeComponent } from './components/form-3';
import { FormFourComponent } from './components/form-4';
import { FormFiveComponent } from './components/form-5';
import { FormSixComponent } from './components/form-6';
import { FormNineComponent } from './components/form-9';
import { GuideToFormArrayComponent } from './components/guide-to-form-array/guide-to-form-array.component';
import { FormExamplesComponent } from './forms.component';
import { FormErrorAppComponent } from './components/magical-error-messages/app.component';

const formsRoutes: Routes = [
  {
    path: '',
    component: FormExamplesComponent,
    children: [
      {path: '', redirectTo: 'form-two', pathMatch: 'full'},
      {path: 'form-one', component: FormOneComponent},
      {path: 'form-two', component: FormTwoComponent},
      {path: 'form-three', component: FormThreeComponent},
      {path: 'form-four', component: FormFourComponent},
      {path: 'form-five', component: FormFiveComponent},
      {path: 'form-six', component: FormSixComponent},
      {path: 'form-seven', component: FormSevenComponent},
      {path: 'form-eight', component: FormEightComponent},
      {path: 'form-nine', component: FormNineComponent},
      {path: 'form-ten', component: FormTenComponent},
      {path: 'form-eleven', component: FormElevenComponent},
      {path: 'guide-to-form-array', component: GuideToFormArrayComponent},
      {path: 'form-errors', component: FormErrorAppComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(formsRoutes)]
})
export class FormsRoutingModule {
}
