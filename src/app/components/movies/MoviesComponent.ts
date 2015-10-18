import {View, Component, NgFor, bootstrap} from 'angular2/angular2';
import {MovieService} from '../../services/MovieService';

@Component({
    selector: 'movies',
    viewBindings: [MovieService]
})
@View({
    templateUrl: 'app/components/movies/MoviesComponent.html',
    directives: [NgFor]
})
export class MoviesComponent {
    private movies:any[];

    constructor(private movieService:MovieService) {
        this.movies = movieService.getMovies();
    }
}