import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { AppRoutingModule }     from './app-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MovieService } from './movie.service'

import { HttpModule } from '@angular/http';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
