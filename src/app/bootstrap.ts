import {bootstrap, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppComponent} from './app/AppComponent';
import {MoviesComponent} from './movies/MoviesComponent';
import {MovieService} from './movies/MovieService';

bootstrap(AppComponent, [ROUTER_PROVIDERS, MoviesComponent, MovieService, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
