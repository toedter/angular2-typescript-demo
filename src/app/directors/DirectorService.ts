import {Injectable} from 'angular2/core';
import {MovieService} from '../movies/MovieService';

@Injectable()
export class DirectorService {

    private directors:any[];

    constructor(movieService:MovieService) {
        var directorMap:{ [key:string]:string[]; } = {};
        for (var movie of movieService.getMovies()) {
            if (typeof directorMap[movie.Director] === "undefined") {
                directorMap[movie.Director] = [];
            }
            directorMap[movie.Director].push(movie.Title);
        }

        this.directors = [];
        for (var director in directorMap) {
            if (directorMap.hasOwnProperty(director)) {
                this.directors.push({"name": director, "movies": directorMap[director]});
            }
        }
    }

    public getDirectors():any[] {
        return this.directors;
    }
}