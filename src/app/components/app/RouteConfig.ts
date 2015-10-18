import {MoviesComponent} from '../movies/MoviesComponent';
import {DirectorsComponent} from '../directors/DirectorsComponent';

export var Routes = {
    home: {
        path: '/',
        redirectTo: '/movies'
    },
    movies: {
        path: '/movies',
        as: 'Movies',
        component: MoviesComponent,
        caption: 'Movies'
    },
    directors: {
        path: '/directors',
        as: 'Directors',
        component: DirectorsComponent,
        caption: 'Directors'
    },
};

export const APP_ROUTES = [this.Routes.home, this.Routes.movies, this.Routes.directors];
