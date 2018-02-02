import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  movie: Movie [] = [];

  value: number = 1;

  title: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.searchMovie('Batman')
  }

  loadMore(title: string) {
    this.movieService.getMovie(this.title, this.value)
      .then(res => this.movie = this.movie.concat(res));
    this.value++;
  }

  onScroll () {
    this.loadMore(this.title)
  }

  resetValues() {
    this.movie = [];
    this.value = 1;
  }

  searchMovie(title: string) {
    this.resetValues()
    return this.loadMore(this.title = title);
  }
}
