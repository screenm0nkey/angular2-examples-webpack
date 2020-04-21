import { Injectable } from '@angular/core';
import Pet, { Cat, Dog } from './pets.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  get members(): Pet[] {
    return [
      {
        name: 'Rex',
        age: 5,
        favoritePark: 'Central Park, New York',
        profilePicture: 'assets/images/sereja-ris-zGyG2OyLu4k-unsplash.jpg',
      } as Dog,
      {
        name: 'Max',
        age: 2,
        favoritePark: 'Treptower Park, Berlin',
      } as Dog,
      {
        name: 'Peanut',
        age: 1,
        favoriteComfyPlace: 'Human bellies',
        profilePicture: 'assets/images/hang-niu-Tn8DLxwuDMA-unsplash.jpg',
      } as Cat,
      {
        name: 'Noob',
        age: 3,
        favoriteComfyPlace: 'Window side',
      } as Cat,
      {
        name: 'Carabas',
        age: 7,
        favoritePark: 'Özgürlük, Istanbul',
        profilePicture: 'assets/images/jack-brind-rmvG_oHzCNA-unsplash.jpg',
      } as Dog,
      {
        name: 'Tom',
        age: 4,
        favoritePark: 'Bois de Boulogne, Paris',
        profilePicture: 'assets/images/charles-zqhe4qjVTJI-unsplash.jpg',
      } as Dog,
      {
        name: 'Mia',
        age: 2,
        favoriteComfyPlace: 'Under the couch',
        profilePicture: 'assets/images/zoe-gayah-jonker-13ky5Ycf0ts-unsplash.jpg',
      } as Cat,
      {
        name: 'Fitz',
        age: 4,
        favoritePark: 'Englisher Garten, Munich',
      } as Dog,
    ];
  }
}
