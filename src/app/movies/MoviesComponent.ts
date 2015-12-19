import {Component} from 'angular2/core';
import {MovieService} from './MovieService';
import {Movie} from './Movie';

@Component({
    selector: 'movies',
    viewBindings: [MovieService],
    templateUrl: 'app/movies/MoviesComponent.html'
})
export class MoviesComponent {
    private movies:Movie[];

    constructor(private movieService:MovieService) {
        this.movies = movieService.getMovies();
    }
}