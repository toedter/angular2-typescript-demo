import {MoviesComponent} from '../movies/MoviesComponent';
import {DirectorsComponent} from '../directors/DirectorsComponent';

export var Routes = {
    movies: {
        path: '/',
        name: 'Movies',
        component: MoviesComponent,
        caption: 'Movies'
    },
    directors: {
        path: '/directors',
        name: 'Directors',
        component: DirectorsComponent,
        caption: 'Directors'
    }
};

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);
