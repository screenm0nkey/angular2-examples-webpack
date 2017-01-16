import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MiscExamplesComponent} from './misc.component';
import {AccordianComponent} from './components/accordian/accordian.module';
import {ChickensComponent} from './components/chickens/chicken.module';
import {ChangeDetectionMain} from './components/change-detection/change.module';
import {RookieComponent} from './components/content-children/content-child.module';
import {CustomersComponent, CustomerDetailComponent} from './components/customers/customers.module';
import {FocusInput} from './components/focusing-input/focusing.module';
import {HostBindingComponent} from './components/host-binding/hosting.module';
import {DirectivesLinquistMain} from './components/directives-linquist/directives.module';
import {ImmutableMain} from './components/immutable/immutable.module';
import {DepInjectionApp} from './components/inject/di.module';
import {MainInputBindingApp} from './components/input-binding/inputbinding.module';
import {MultiTransclusion} from './components/multi-content/multicontent.module';
import {NgZoneMainComponent} from './components/ng-zone/ngzone.module';
import {AppComponent} from './components/notifications/notifications.module';
import {SocketApp} from './components/socket-io/socket-component';
import {MainChildrenApp} from './components/view-children/childviews.module';
import {TricksMainComponent} from './components/tricks/tricks.module';
import {MiscLifecycleMain} from './components/lifecycle/lifecycle.module';
import { TemplateComponent} from './components/templates/templates.module';
// import {DynamicExamplesMain} from './components/dynamic-loader/dynamic.module';

const routes: Routes = [
  {
    path: 'misc',
    component: MiscExamplesComponent,
    children: [
      {path: '', redirectTo: 'accordian', pathMatch: 'full'},
      {path: 'accordian', component: AccordianComponent},
      {path: 'chickens', component: ChickensComponent},
      {path: 'change-detection', component: ChangeDetectionMain},
      {path: 'rookie-mistakes', component: RookieComponent},
      {path: 'customers', component: CustomersComponent},
      {path: 'customers/:id', component: CustomerDetailComponent},
      {path: 'focus-input', component: FocusInput},
      {path: 'hostbinding', component: HostBindingComponent},
      {path: 'directives', component: DirectivesLinquistMain},
      {path: 'change2', component: ImmutableMain},
      {path: 'dependency', component: DepInjectionApp},
      {path: 'input-binding', component: MainInputBindingApp},
      {path: 'emitter', component: MultiTransclusion},
      {path: 'ngzone', component: NgZoneMainComponent},
      {path: 'notifications', component: AppComponent},
      {path: 'socket-io', component: SocketApp},
      {path: 'view-children', component: MainChildrenApp},
      {path: 'tricks', component: TricksMainComponent},
      {path: 'lifecycle', component: MiscLifecycleMain},
      {path: 'templates', component: TemplateComponent},
      // {path: 'dynamic-component', component: DynamicExamplesMain},
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
