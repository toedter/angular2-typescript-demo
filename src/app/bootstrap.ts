import {bootstrap, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppComponent} from './app/AppComponent';
import {MovieService} from './movies/MovieService';

bootstrap(AppComponent, [MovieService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
