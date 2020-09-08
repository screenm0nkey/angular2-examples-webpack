import { Component, Input } from '@angular/core';
import { Dog } from './pets.model';

@Component({
  selector: 'app-dog-item',
  template: `
    <div id="card">
      <img [src]="member.profilePicture || 'assets/images/dog.png'"/>
      <div id="info">
        <div id="name">{{member.name}}</div>
        <div id="age">Age: {{member.age}}</div>
        <div id="favoritePark">Favorite Park: {{member.favoritePark}}</div>
      </div>
    </div>
  `,
  styleUrls: ['./members-list.component.scss']
})
export class DogItemComponent {
  @Input() member: Dog;

  constructor() { }
}
