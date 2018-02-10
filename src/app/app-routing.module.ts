import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowseComponent} from './components/pages/browse/browse.component';
import {RadioComponent} from './components/pages/radio/radio.component';
import {YourDailyMixComponent} from './components/pages/your-daily-mix/your-daily-mix.component';
import {RecentlyPlayedComponent} from './components/pages/recently-played/recently-played.component';
import {SongsComponent} from './components/pages/songs/songs.component';
import {AlbumsComponent} from './components/pages/albums/albums.component';
import {ArtistsComponent} from './components/pages/artists/artists.component';
import {StationsComponent} from './components/pages/stations/stations.component';
import {LocalFilesComponent} from './components/pages/local-files/local-files.component';
import {VideosComponent} from './components/pages/videos/videos.component';
import {PodcastsComponent} from './components/pages/podcasts/podcasts.component';
import {PlaylistsComponent} from './components/pages/playlists/playlists.component';

// Routes
const appRoutes: Routes = [
  { path: '', component: BrowseComponent},
  { path: 'radio', component: RadioComponent},
  { path: 'your-daily-mix', component: YourDailyMixComponent},
  { path: 'recently-played', component: RecentlyPlayedComponent},
  { path: 'songs', component: SongsComponent},
  { path: 'albums', component: AlbumsComponent},
  { path: 'artists', component: ArtistsComponent},
  { path: 'stations', component: StationsComponent},
  { path: 'local-files', component: LocalFilesComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'podcasts', component: PodcastsComponent},
  { path: 'playlists/:playlist', component: PlaylistsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
