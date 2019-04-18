import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {EchonestAppComponent} from './echonest-app.component';
import {ArtistComponent} from './artist.component';
import {DropdownComponent} from './dropdown.component';

@NgModule({
  imports: [SharedModule],
  declarations: [EchonestAppComponent, ArtistComponent, DropdownComponent],
  providers: []
})
export class EchonestModule {
}

export {EchonestAppComponent};
