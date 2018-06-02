import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private movies = new BehaviorSubject<any>([]);
  private favoriteMovies = new BehaviorSubject<any>([]);
  private badgesVisible = new BehaviorSubject<any>([false, false]);

  movieObservable = this.movies.asObservable();
  favoriteMoviesObservable = this.favoriteMovies.asObservable();
  badgesVisibleObservable = this.badgesVisible.asObservable();

  constructor() {
  }

  changeMovies(movies) {
    this.movies.next(movies);
  }

  changeFavoriteMovies(favoriteMovies) {
    this.favoriteMovies.next(favoriteMovies);
  }

  changeBadgesVisible(badgesVisisble) {
    this.badgesVisible.next(badgesVisisble);
  }
}
