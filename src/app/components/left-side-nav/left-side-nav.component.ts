import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.sass']
})
export class LeftSideNavComponent implements OnInit {

  topLinks: Links[];
  yourLibraryLinks: Links[];
  yourPlaylistLinks: Links[];

  constructor() { }

  ngOnInit() {
    this.topLinks = [
      { name: 'Browse', link: '' },
      { name: 'Radio', link: 'radio' }
    ];

    this.yourLibraryLinks = [
      { name: 'Your Daily Mix', link: 'your-daily-link' },
      { name: 'Recently Played', link: 'recently-played' },
      { name: 'songs', link: 'songs' },
      { name: 'Albums', link: 'albums' },
      { name: 'Artists', link: 'artists' },
      { name: 'Stations', link: 'stations' },
      { name: 'Local Files', link: 'local-files' },
      { name: 'Videos', link: 'videos' },
      { name: 'Podcasts', link: 'podcasts' }
    ];

    this.yourPlaylistLinks = [
      { name: 'United States Top 50', link: 'playlists/united-states-top-50' },
      { name: 'Discover Weekly', link: 'playlists/discover-weekly' },
      { name: 'Global Top 50', link: 'playlists/global-top-50' },
      { name: 'Liked from radio', link: 'playlists/liked-from-radio' },
      { name: 'Car', link: 'playlists/car' },
      { name: 'Playlist 1', link: 'playlists/playlist-1' },
    ];
  }

}
interface Links {
  name: string;
  link: string;
}
