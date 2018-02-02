import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { MovieService }  from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  private movie: Movie

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getMovieById()
  }

  getMovieById(): void {
    const id = this.route.snapshot.params.id;
    this.movieService.getMovieById(id)
      .then(movie => this.movie = movie)
  }
}
