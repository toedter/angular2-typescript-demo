import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {MovieService} from './services/MovieService';
import {AppComponent} from './components/app/AppComponent';
import {MoviesComponent} from './components/movies/MoviesComponent';

bootstrap(AppComponent, [ROUTER_PROVIDERS, MovieService, MoviesComponent]);
