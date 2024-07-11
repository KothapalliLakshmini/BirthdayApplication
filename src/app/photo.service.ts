import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photosPath = 'assets/photos';
  private photoNames: string[] = [
    'photo1.jpg',
    'photo2.jpg',
   
    // Add all your photo names here
  ];

  constructor() {}

  getPhotos(): string[] {
    return this.photoNames.map(photo => `${this.photosPath}/${photo}`);
  }
}