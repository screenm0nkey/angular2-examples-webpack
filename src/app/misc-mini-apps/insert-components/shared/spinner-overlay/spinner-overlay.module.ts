import { NgModule } from '@angular/core';
import { SpinnerOverlayComponent } from '@insertApp/shared/spinner-overlay/spinner-overlay.component';
import { SpinnerOverlayService } from '@insertApp/shared/spinner-overlay/spinner-overlay.service';
import { SpinnerModule } from '@insertApp/shared/spinner/spinner.module';

@NgModule({
  imports: [SpinnerModule],
  declarations: [SpinnerOverlayComponent],
  providers: [SpinnerOverlayService],
  exports: []
})
export class SpinnerOverlayModule { }



