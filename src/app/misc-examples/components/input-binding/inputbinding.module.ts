import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {MainInputBindingApp} from './main';
import {InventoryApp, ProductRow, ProductsList, ProductImage, ProductDepartment, PriceDisplay} from './inputs';
import {NameParentComponent, NameChildComponent} from './input-getters-setters';
import {VersionParentComponent, VersionChildComponent} from './ng-onchange';
import {CountdownLocalVarParentComponent, CountdownTimerComponent} from './local-variables';
import {ToggleButtonComponent, ToggleButton} from './toggle-button';

@NgModule({
  imports: [SharedModule],
  declarations: [
    MainInputBindingApp,
    InventoryApp, ProductRow, ProductsList, ProductImage, ProductDepartment, PriceDisplay,
    NameParentComponent, NameChildComponent,
    VersionParentComponent, VersionChildComponent,
    CountdownLocalVarParentComponent, CountdownTimerComponent,
    ToggleButtonComponent, ToggleButton
  ]
})
export class InputBindingModule {
}

export {MainInputBindingApp}
