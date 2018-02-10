import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit {

  playing: Boolean = false;
  position: number = 0;
  songInterval: number;
  @ViewChild('myAudio') myAudio: any;
  audio: any;
  @Input('songs') songs;
  currentSongIndex: number = 0;

  constructor() { }

  ngOnInit() {
    this.audio = this.myAudio.nativeElement;
    this.startMusic();
  }

  startMusic () {
    setInterval(() => {
      if (this.playing || this.position !> 100) {
        this.position += this.songInterval;
      }
    }, 150);
  }

  onTogglePlay () {
    this.playing = !this.playing;
    if (this.playing) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  onNavPlayer (direction) {
    if (direction == 'back') {
      if (this.currentSongIndex + 1 >= this.songs.length) {
        if (this.playing) {
          this.onTogglePlay();
        }
        this.currentSongIndex--;
        this.audio.play().then(() => {
          this.onTogglePlay();
        })
      } else {
        if (this.playing) {
          this.onTogglePlay();
        }
        this.currentSongIndex = this.songs.length - 1;
        this.audio.play().then(() => {
          this.onTogglePlay();
        })
      }
    } else {
      if (this.currentSongIndex + 1 < this.songs.length) {
        if (this.playing) {
          this.onTogglePlay();
        }
        this.currentSongIndex++;
        this.audio.play().then(() => {
          this.onTogglePlay();
        })
      } else {
        if (this.playing) {
          this.onTogglePlay();
        }
        this.currentSongIndex = 0;
        this.audio.play().then(() => {
          this.onTogglePlay();
        })
      }
    }
  }

}
