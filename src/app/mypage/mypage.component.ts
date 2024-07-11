import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Card {
  imageUrl: string; // Path to the card image
  title: string;
  description: string;
  showButton: boolean; // Flag to control button visibility
  buttonText: string;
  link: string; // Path to redirect to on button click
}

@Component({
  selector: 'app-mypage',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatButtonModule,MatIconModule],
  templateUrl: './mypage.component.html',
  styleUrl: './mypage.component.css'
})
export class MypageComponent {
  cards = [
    {
      title: 'Photos',
      description: 'Youre the sun that brightens my day, the moon that guides me through the night. You are everything to me.',
      image: 'assets/images/image1.jpg',
      toggleImage: 'assets/images/toggle.jpg',
      toggleText: 'See whats inside',
      path: '/photos',
      showButton: false
    },
    {
      title: 'Videos',
      description: 'They say marriage dims the spark, but you still set my heart on fire.',
      image: 'assets/images/image2.jpg',
      toggleImage: 'assets/images/toggle.jpg',
      toggleText: 'Lets go back to memories',
      path: '/videos',
      showButton: false
    },
    {
      title: 'Surprise',
      description: 'I put a lot of love into picking this out for you. Open it and Happy Birthday, my love. This is just the beginning of a day filled with surprises.',
      image: 'assets/images/image3.jpg',
      toggleImage: 'assets/images/toggle.jpg',
      toggleText: 'Unwrap My Love for You',
      path: '/surprise',
      showButton: false
    }
  ];

  constructor(private router: Router) {}

  toggleButton(card: any): void {
    card.showButton = !card.showButton;
  }

  redirectTo(path: string): void {
    this.router.navigate([path]);
  }
}