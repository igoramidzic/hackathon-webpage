import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeftSideNavComponent } from './components/left-side-nav/left-side-nav.component';
import { RightSideNavComponent } from './components/right-side-nav/right-side-nav.component';
import { BrowseComponent } from './components/pages/browse/browse.component';
import { RadioComponent } from './components/pages/radio/radio.component';
import { YourDailyMixComponent } from './components/pages/your-daily-mix/your-daily-mix.component';
import { RecentlyPlayedComponent } from './components/pages/recently-played/recently-played.component';
import { SongsComponent } from './components/pages/songs/songs.component';
import { AlbumsComponent } from './components/pages/albums/albums.component';
import { ArtistsComponent } from './components/pages/artists/artists.component';
import { StationsComponent } from './components/pages/stations/stations.component';
import { LocalFilesComponent } from './components/pages/local-files/local-files.component';
import { VideosComponent } from './components/pages/videos/videos.component';
import { PodcastsComponent } from './components/pages/podcasts/podcasts.component';
import { PlayerComponent } from './components/player/player.component';
import { PlaylistsComponent } from './components/pages/playlists/playlists.component';
import { TimePipe } from './pipes/time.pipe';
import { ContentComponent } from './components/content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftSideNavComponent,
    RightSideNavComponent,
    BrowseComponent,
    RadioComponent,
    YourDailyMixComponent,
    RecentlyPlayedComponent,
    SongsComponent,
    AlbumsComponent,
    ArtistsComponent,
    StationsComponent,
    LocalFilesComponent,
    VideosComponent,
    PodcastsComponent,
    PlayerComponent,
    PlaylistsComponent,
    TimePipe,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [TimePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
