import {Injectable} from 'angular2/core';
import {MovieService} from './MovieService';

@Injectable()
export class DirectorService {

    private directors: any[];

    constructor(movieService:MovieService) {
        var movies:any[] = movieService.getMovies();
        this.directors = [];
        for (var movie of movies) {
            this.directors.push({ "name":movie.Director, "movie":movie.Title });
        }
    }

    public getDirector(): any[] {
        return this.directors;
    }
}