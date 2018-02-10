import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  songs = [
    { name: 'All The Stars', artist: 'Kendrick Lamar, SZA', src: 'assets/music/all-the-stars.mp3', albumSrc: 'assets/albums/all-the-stars.jpg'},
    { name: 'Sandstorm', artist: 'Darude', src: '/assets/music/sandstorm.mp3', albumSrc: 'assets/albums/sandstorm.jpg'},
    { name: 'Tuxedo', artist: 'Fux With The Tux', src: '/assets/music/tuxedo.mp3', albumSrc: 'assets/albums/tuxedo.jpg'},
    { name: 'Get It Right', artist: 'Diplo', src: '/assets/music/get-it-right.mp3', albumSrc: 'assets/albums/get-it-right.jpg'},
    { name: 'Redbone', artist: 'Childish Gambino', src: '/assets/music/redbone.mp3', albumSrc: 'assets/albums/redbone.jpeg'},
  ]
}
