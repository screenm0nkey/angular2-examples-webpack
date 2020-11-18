import { NgModule } from '@angular/core';
import { SpinnerComponent } from '@standaloneApp/shared/spinner/spinner.component';
import { SpinnerOverlayComponent } from '@standaloneApp/shared/spinner/spinner-overlay.component';
import { SpinnerOverlayService } from '@standaloneApp/shared/spinner/spinner-overlay.service';
import { SpinnerOverlayWrapperComponent } from '@standaloneApp/shared/spinner/spinner-overlay-wrapper.component';

@NgModule({
    imports: [],
    declarations: [SpinnerComponent, SpinnerOverlayComponent, SpinnerOverlayWrapperComponent],
    exports: [SpinnerComponent],
    providers: [SpinnerOverlayService],
})
export class SpinnerModule {
}
