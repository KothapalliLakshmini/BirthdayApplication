import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-surprisepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './surprisepage.component.html',
  styleUrl: './surprisepage.component.css'
})
export class SurprisepageComponent  implements OnInit {
  numbers: number[] = [];
  imageUrls: string[] = [];

  ngOnInit(): void {
    this.numbers = Array.from({ length: 30 }, (_, i) => i + 1);
    this.imageUrls = this.getImageUrls();
  }

  getImageUrls(): string[] {
    return [
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
      'assets/Pictures/image.jpg',
    ];
  }

  onButtonClick(number: number): void {
    alert(`Button ${number} clicked`);
  }
}
