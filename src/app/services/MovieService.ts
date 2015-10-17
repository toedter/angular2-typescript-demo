export class MovieService {

    private movies: any[];

    constructor() {
        this.movies = [
            { "title":"The Shawshank Redemption", "year":"1994", "rating": "9.2" },
            { "title":"The Godfather", "year":"1972", "rating": "9.2" },
            { "title":"The Godfather: Part II", "year":"1974", "rating": "9.0" },
            { "title":"The Dark Knight", "year":"2008", "rating": "8.9" },
            { "title":"Angry Men", "year":"1957", "rating": "8.9" }
        ];
    }

    public getMovies(): any[] {
        return this.movies;
    }
}