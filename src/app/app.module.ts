import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { LyricsComponent } from './pages/lyrics/lyrics.component';
import { SearchBoxComponent } from './shared/search-box/search-box.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CollectionsComponent,
    LyricsComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
