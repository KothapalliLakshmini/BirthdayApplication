import { Component,  ViewChild,AfterViewInit,ElementRef, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router }  from '@angular/router';
@Component({
  selector: 'app-birthdaypage',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './birthdaypage.component.html',
  styleUrl: './birthdaypage.component.css'
})
export class BirthdaypageComponent implements OnInit, AfterViewInit {
  gifUrl = 'assets/images/birthday.gif'; // Path to your GIF
  audioUrl = 'assets/happysong.mp3';
  isPlaying = true; // Flag for audio playback state (optional if not needed)

  @ViewChild('birthdayAudio') audioRef!: ElementRef<HTMLAudioElement>; // Reference to audio element with non-null assertion


  constructor(private router: Router){
    
  }

  ngOnInit() {
 
  }

  
  navigate(){
    this.router.navigate(['/home']);
  }
  ngAfterViewInit() {
    if (this.audioRef && this.audioRef.nativeElement) {
      // Play audio automatically when the component is initialized
      this.audioRef.nativeElement.play();
    }
  }
}