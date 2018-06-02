import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(movies: any[], searchText: string): any[] {
    if (0 === searchText.length) {
      return movies;
    }

    return movies.filter(movie => {
      return movie.name.includes(searchText);
    });
  }

}
