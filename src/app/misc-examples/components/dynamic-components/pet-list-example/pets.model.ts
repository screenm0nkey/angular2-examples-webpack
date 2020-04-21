export default interface Pet {
  name: string;
  age: number;
  profilePicture?: string;
}

export interface Cat extends Pet {
  favoriteComfyPlace: string;
}

export interface Dog extends Pet {
  favoritePark: string;
}
