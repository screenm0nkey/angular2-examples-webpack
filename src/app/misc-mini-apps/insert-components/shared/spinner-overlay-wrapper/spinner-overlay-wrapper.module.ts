import { NgModule } from '@angular/core';
import { SpinnerOverlayWrapperComponent } from '@insertApp/shared/spinner-overlay-wrapper/spinner-overlay-wrapper.component';
import { SpinnerModule } from '@insertApp/shared/spinner/spinner.module';

@NgModule({
    imports: [SpinnerModule],
    declarations: [SpinnerOverlayWrapperComponent],
    exports: [SpinnerOverlayWrapperComponent]
})
export class SpinnerOverlayWrapperModule {
}
