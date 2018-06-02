import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favoriteMovies = [];
  searchText = '';

  constructor(private _data: DataService) {
  }

  ngOnInit() {
    this._data.favoriteMoviesObservable.subscribe(favoriteMovies => this.favoriteMovies = favoriteMovies);
    this._data.changeFavoriteMovies(this.favoriteMovies);
  }

  removeMovieFromFavorite(i) {
    this.favoriteMovies[i].favorite = false;
    this.favoriteMovies[i].class = 'fa-heart-o';
    this.favoriteMovies.splice(i, 1);
    this._data.changeFavoriteMovies(this.favoriteMovies);
  }

}
