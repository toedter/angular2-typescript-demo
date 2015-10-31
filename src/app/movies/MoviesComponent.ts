import {Component, NgFor} from 'angular2/angular2';
import {MovieService} from './MovieService';
import {Movie} from './Movie';

@Component({
    selector: 'movies',
    viewBindings: [MovieService],
    templateUrl: 'app/movies/MoviesComponent.html',
    directives: [NgFor]
})
export class MoviesComponent {
    private movies:Movie[];

    constructor(private movieService:MovieService) {
        this.movies = movieService.getMovies();
    }
}