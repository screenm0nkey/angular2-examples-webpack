import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/_shared.module';
import {MainInputBindingApp} from './_main.component';
import {InventoryApp, PriceDisplay, ProductDepartment, ProductImage, ProductRow, ProductsList} from './inputs';
import {NameChildComponent, NameParentComponent} from './input-getters-setters';
import {VersionChildComponent, VersionParentComponent} from './ng-onchange';
import {CountdownLocalVarParentComponent, CountdownTimerComponent} from './local-variables';
import {ToggleButton, ToggleButtonComponent} from './toggle-button';
import { AccessLocalVariableDirective, PopupDirective } from './local-variables-with-directive';

@NgModule({
  imports: [SharedModule],
  declarations: [
    MainInputBindingApp,
    InventoryApp,
    ProductRow,
    ProductsList,
    ProductImage,
    ProductDepartment,
    PriceDisplay,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    CountdownLocalVarParentComponent,
    CountdownTimerComponent,
    ToggleButtonComponent,
    ToggleButton,
    AccessLocalVariableDirective,
    PopupDirective
  ]
})
export class InputBindingModule {
}

export {MainInputBindingApp};
