import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { PhotoService } from '../photo.service';
interface FileMetadata {
  name: string;
  type: string;
  size: number;
  lastModified: number;
}
@Component({
  selector: 'app-photospage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photospage.component.html',
  styleUrl: './photospage.component.css'
})
export class PhotospageComponent implements OnInit {
  photos: string[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photos = this.photoService.getPhotos();
  }
}