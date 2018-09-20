import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';
import { Artist } from './echonest.repo';

@Component({
  selector: 'artist-component',
  styleUrls: ['./echonest.css'],
  template: `
        <div class='artist'>
            <span style='font-size:11px'>[{{artist.hotttnesss}}] {{artist.name}}</span>
            <button style='height:22px;line-height:22px;padding:0'
                [disabled]='this.disabled'
                (click)='select.emit(artist)'>
                {{buttonText}}
            </button>
        </div>`
})
export class ArtistComponent implements OnInit, OnChanges {
  @Output() select = new EventEmitter();
  @Input() artist: Artist;
  @Input() type: string;
  private readonly ADD: string = 'Add';
  private readonly REMOVE: string = 'Remove';
  private buttonText: string;
  private disabled: boolean = false;

  // only called for/if there is an @input variable set by parent.
  // Responds after Angular sets a data-bound @input property. The method
  // receives a changes object of current and previous values.
  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes.artist) {
      console.log(11, this.type, this.artist.favourited, this.artist.name);
      this.setButtonText(changes.artist.currentValue.favourited);
    }
  }

  ngOnInit() {
    this.setButtonText(this.artist.favourited);
  }

  setButtonText(favourited: boolean) {
    this.buttonText = this.ADD;
    this.disabled = false;
    if (this.type === 'all' && favourited) {
      this.disabled = true;
    }
    if (this.type === 'favourite' && favourited) {
      this.buttonText = this.REMOVE;
    }
  }
}
