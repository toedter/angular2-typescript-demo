import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { MoviesComponent } from '../movies/MoviesComponent';
import { DirectorsComponent } from '../directors/DirectorsComponent';

@Component({
    selector: 'movie-app',
    templateUrl: 'app/app/AppComponent.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/movies', name: 'Movies', component: MoviesComponent, useAsDefault: true},
    {path: '/directors', name: 'Directors', component: DirectorsComponent }
])
export class AppComponent {
}
