import { Component, Input } from '@angular/core';
import { Cat } from './pets.model';

@Component({
  selector: 'app-cat-item',
  template: `
    <div id="card">
      <img [src]="member.profilePicture || 'assets/images/cat.png'"/>
      <div id="info">
        <div id="name">{{member.name}}</div>
        <div id="age">Age: {{member.age}}</div>
        <div id="favoriteComfyPlace">Favorite Comfy Place: {{member.favoriteComfyPlace}}</div>
      </div>
    </div>
  `,
  styleUrls: ['./members-list.component.scss']
})
export class CatItemComponent {
  @Input() member: Cat;

  constructor() { }
}
