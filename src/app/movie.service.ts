import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class MovieService {
  private hashUrl: string = '&apikey=91d97dae'
  private baseUrl: string = 'http://www.omdbapi.com'

  constructor(private http: Http) { }

  getMovie(name: string, limit: number) {
    return this.http.get(`${this.baseUrl}/?i=tt3896198${this.hashUrl}&s=${name}&page=${limit}`)
    .toPromise()
    .then(res => res.json().Search)
    .then(movies => movies.map( movie => {
      const { Title, Year, imdbID, Poster } = movie;
      return {
        id: imdbID,
        title: Title,
        year: Year,
        poster: Poster
      }
    }))
  }

  getMovieById(movie_id: string) {
    return this.http.get(`${this.baseUrl}/?i=${movie_id}${this.hashUrl}`)
    .toPromise()
    .then(res => res.json())
    .then(movie => {
      const {
        Title, Year, Runtime, Genre, Director,
        Writer, Actors, Plot, Language, Country,
        Awards, Poster, Production, Website, imdbID
      } = movie
      return {
        id: imdbID,
        title: Title,
        year: Year,
        runtime: Runtime,
        genre: Genre,
        director: Director,
        writer: Writer,
        actors: Actors,
        plot: Plot,
        language: Language,
        country: Country,
        awards: Awards,
        poster: Poster,
        production: Production,
        website: Website
      }
    })
  }
}
