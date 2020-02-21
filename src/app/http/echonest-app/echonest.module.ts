import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/_shared.module';
import {MusicSearchAppComponent} from './echonest-app.component';
import {ArtistComponent} from './artist.component';
import {DropdownComponent} from './dropdown.component';

@NgModule({
  imports: [SharedModule],
  declarations: [MusicSearchAppComponent, ArtistComponent, DropdownComponent],
  providers: []
})
export class MusicSearchModule {
}

export {MusicSearchAppComponent};
