import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './components/app/AppComponent';
import {MoviesComponent} from './components/movies/MoviesComponent';
import {MovieService} from './services/MovieService';

bootstrap(AppComponent, [ROUTER_PROVIDERS, MoviesComponent, MovieService]);
