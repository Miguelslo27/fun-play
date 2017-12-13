/* MODULES */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { VideoJsPlayerComponent } from './components/video-js-player/video-js-player.component';
import { PlayListComponent } from './components/play-list/play-list.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';

/* SERVICES */

/* DIRECTIVES */

/* PIPES */

/* CONSTANTS */
import { ROUTER } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    VideoJsPlayerComponent,
    PlayListComponent,
    AdvertisingComponent,
    AppWrapperComponent
  ],
  imports: [
    ROUTER,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
