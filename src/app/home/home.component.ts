import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieText = '';
  movies = [];
  favoriteMovies = [];
  badgesVisible = [];
  error = -1;
  errorMessages = [
    'Please, input a movie !', // 0
    'This movie is already on your list !' // 1
  ];

  badges = [
    {
      'visible': false,
      'txt': 'It\'s your fifth movie added to your favorite list !',
      'img': '/assets/img/badge.png'
    },
    {
      'visible': false,
      'txt': 'It\'s your second time removing movie',
      'img': '/assets/img/badge.png'
    }
  ];

  countFirstFiveFavorite = 0;
  countTwoRemove = 0;

  constructor(private _data: DataService) {
  }

  ngOnInit() {
    this._data.movieObservable.subscribe(movies => this.movies = movies);
    this._data.changeMovies(this.movies);
    this._data.favoriteMoviesObservable.subscribe(favoriteMovies => this.favoriteMovies = favoriteMovies);
    this._data.changeFavoriteMovies(this.favoriteMovies);
    this._data.badgesVisibleObservable.subscribe(badgesVisible => this.badgesVisible = badgesVisible);
    this._data.changeFavoriteMovies(this.favoriteMovies);
  }

  addMovie() {
    if (0 === this.movieText.length) { // empty input
      this.error = 0;
    } else if (this.movieExist(this.movieText)) { // movie already exist
      this.error = 1;
    } else {
      this.movies.push({
        'name': this.movieText,
        'favorite': false,
        'class': 'fa-heart-o'
      });
      this.movieText = '';
      this._data.changeMovies(this.movies);
      this.error = -1;
    }
  }

  movieExist(movieText: string) {
    let exist = false;
    this.movies.forEach(function (movie) {
      if (movie.name === movieText) {
        exist = true;
      }
    });
    return exist;
  }

  removeMovie(i) {
    const movie = this.movies[i];
    const favoriteIndex = this.favoriteMovies.indexOf(movie);
    if (-1 !== favoriteIndex) {
      this.removeMovieFromFavorite(movie);
      this._data.changeFavoriteMovies(this.favoriteMovies);
    }
    this.movies.splice(i, 1);
    this._data.changeMovies(this.movies);

    if (!this.badgesVisible[1]) {
      this.countTwoRemove++;
      if (2 === this.countTwoRemove) {
        this.badges[1].visible = true;
        this.badgesVisible[1] = true;
        setTimeout(function() {
          this.badges[1].visible = false;
        }.bind(this), 3000);
      }
    }
  }

  setFavoriteMovie(i) {
    const movie = this.movies[i];
    if (movie.favorite) {
      movie.class = 'fa-heart-o';
      this.removeMovieFromFavorite(movie);
    } else {
      movie.class = 'fa-heart';
      this.addMovieToFavorite(i);

      if (!this.badgesVisible[0]) {
        this.countFirstFiveFavorite++;
        if (5 === this.countFirstFiveFavorite) {
          this.badges[0].visible = true;
          this.badgesVisible[0] = true;
          setTimeout(function() {
            this.badges[0].visible = false;
          }.bind(this), 3000);
        }
      }
    }
    movie.favorite = !movie.favorite;
    this._data.changeFavoriteMovies(this.favoriteMovies);
  }

  addMovieToFavorite(i) {
    this.favoriteMovies.push(this.movies[i]);
  }

  removeMovieFromFavorite(movie) {
    const i = this.favoriteMovies.indexOf(movie);
    if (-1 !== i) {
      this.favoriteMovies.splice(i, 1);
    }
  }

}
