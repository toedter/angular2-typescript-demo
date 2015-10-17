import {View, Component, NgFor, bootstrap} from 'angular2/angular2';
import {MovieService} from '../services/MovieService';

@Component({
    selector: 'movie-app',
    viewBindings: [MovieService]
})
@View({
    templateUrl: 'app/components/AppComponent.html',
    directives: [NgFor]
})
export class AppComponent {
    private name:string;
    private movies:any[];

    constructor(private movieService:MovieService) {
        this.name = 'Movie App';
        this.movies = movieService.getMovies();
    }
}

bootstrap(AppComponent);