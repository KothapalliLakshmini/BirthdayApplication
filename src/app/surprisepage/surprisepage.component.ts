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
  imageText: string[] =[];
  isRevealed: boolean[] = [];
  giftImageUrls: string[] =[];

  ngOnInit(): void {
    this.numbers = Array.from({ length: 30 }, (_, i) => i + 1);
    this.imageUrls = this.getImageUrls();
    this.imageText = this.getImageText();
    this.giftImageUrls = this.getGiftImageUrls();
  }

  getImageUrls(): string[] {
    return [
      'assets/Pictures/1.jpg',
      'assets/Pictures/2.jpg',
      'assets/Pictures/3.jpg',
      'assets/Pictures/4.jpg',
      'assets/Pictures/5.jpg',
      'assets/Pictures/6.jpg',
      'assets/Pictures/7.jpg',
      'assets/Pictures/8.jpg',
      'assets/Pictures/9.jpg',
      'assets/Pictures/10.jpg',
      'assets/Pictures/11.jpg',
      'assets/Pictures/12.jpg',
      'assets/Pictures/13.jpg',
      'assets/Pictures/14.jpg',
      'assets/Pictures/15.jpg',
      'assets/Pictures/16.jpg',
      'assets/Pictures/17.jpg',
      'assets/Pictures/18.jpg',
      'assets/Pictures/19.jpg',
      'assets/Pictures/20.jpg',
      'assets/Pictures/21.jpg',
      'assets/Pictures/22.jpg',
      'assets/Pictures/23.jpg',
      'assets/Pictures/24.jpg',
      'assets/Pictures/25.jpg',
      'assets/Pictures/26.jpg',
      'assets/Pictures/27.jpg',
      'assets/Pictures/28.jpg',
      'assets/Pictures/29.jpg',
      'assets/Pictures/30.jpg',
    ];
  }

  getGiftImageUrls(): string[] {
    return [
      'assets/Reveal/1.jpg',
      'assets/Reveal/2.jpg',
      'assets/Reveal/3.jpg',
      'assets/Reveal/4.jpg',
      'assets/Reveal/5.jpg',
      'assets/Reveal/6.jpg',
      'assets/Reveal/7.jpg',
      'assets/Reveal/8.jpg',
      'assets/Reveal/9.jpg',
      'assets/Reveal/10.jpg',
      'assets/Reveal/11.jpg',
      'assets/Reveal/12.jpg',
      'assets/Reveal/13.jpg',
      'assets/Reveal/14.jpg',
      'assets/Reveal/15.jpg',
      'assets/Reveal/16.jpg',
      'assets/Reveal/17.jpg',
      'assets/Reveal/18.jpg',
      'assets/Reveal/19.jpg',
      'assets/Reveal/20.jpg',
      'assets/Reveal/21.jpg',
      'assets/Reveal/22.jpg',
      'assets/Reveal/23.jpg',
      'assets/Reveal/24.jpg',
      'assets/Reveal/25.jpg',
      'assets/Reveal/26.jpg',
      'assets/Reveal/27.jpg',
      'assets/Reveal/28.jpg',
      'assets/Reveal/29.jpg',
      'assets/Reveal/30.jpg',
     
    ];
  }

  getImageText(): string[] {
    return [

      "This beautiful piece will make you feel confident and stylish.",//dress
      'I can take you places, but I have no feet. What am I?',//shoes
      "Beat the heat with a splash of fun.",//Water Game:
      "Get ready for an exciting adventure in a world of your choice.",//Video Game: 
      "For the cricket fan in you, a collectible piece to treasure.",//Fridge Magnet
      "These collectibles capture the spirit of cricket. Who will you find in your pack?",//Cricket cards
      "I spin and twirl, creating a colorful spectacle. Can you guess this traditional Indian toy?",//Bongaram
      "A sweet treat to satisfy your cravings.",//candies
      "Uncork a sweet message just for you.",//Message in a Bottle: 
      "I stick to some things, but not others. What am I", // magnets
      "I zoom around on wheels, but have no driver. What am I?", // car toy
      "The gift of a sparkling clean of your tunes to types, with a little less effort.",//Cleaning Kit
      "This miniature marvel combines playtime with keeping track of time. Guess what takes flight with a tick-tock?",//Aeroplane toy
      "Gather your friends and family for a nostalgic challenge. This game involves marbles and a bit of skill.",//Golilu
      "Stay connected with all your devices, no matter where you go.",//3 in 1 Charger
      "Test your skills and aim for some indoor fun.",//Archery Game
      "A classic game night awaits with this nostalgic favorite.",//Slingo Game Board: 
      "Create a lasting memory of your love with a personalized hand mold.",//Hand Casting Kit
      "A strategic board game for a fun challenge with friends and family.",//Chinese Checkers:
      'Never lose track of your important belongings again.',//AirTag: 
      'Whether its water or something a little stronger, this will keep you hydrated.',//Bottle
      'Melt away stress and tension for ultimate relaxation.',//Massager
      'Enjoy hands-free entertainment wherever you go.',//phone stand
      'Keep your AirPods safe and stylish with this personalized case.',//airpods case
      'Capture a special memory to cherish forever',//Frame
      'Organize all your charging cables in one convenient place.',//charger bag
      'Fill this blank canvas with your favorite memories and stories.',//scrap book
      'A personalized reminder of a melody that holds a special meaning.',//songplaque
      'I help you see the world a little clearer, even underwater.',//gogggles
      'The gift of wireless freedom for your music and calls.',//airpods
    ];

  }

onButtonClick(number: number) {
    this.isRevealed[number - 1] = !this.isRevealed[number - 1];
  }
}
